import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from '@docusaurus/router';

import styles from './styles.module.css';

// Temporary popup inviting docs visitors to the Kardsort card sort study.
// Remove this component (and its entry in src/theme/Root.js) after the study closes.
const SURVEY_URL = 'https://uxresearch.kardsort.com/sauce-docs-ext';
const IDLE_MS = 60000;
const MIN_PAGE_VIEWS = 2;
const SHOWN_KEY = 'kardsortSurveyShown';
const PAGE_VIEWS_KEY = 'kardsortSurveyPageViews';

function readStorage(storage, key) {
    try {
        return storage.getItem(key);
    } catch {
        return null;
    }
}

function writeStorage(storage, key, value) {
    try {
        storage.setItem(key, value);
    } catch {
        // Storage can be blocked (private mode, disabled site data).
    }
}

const SurveyPopup = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [eligible, setEligible] = useState(false);
    const primaryButtonRef = useRef(null);

    // Count page views in this session; the popup is only eligible from the second page on.
    useEffect(() => {
        if (readStorage(window.localStorage, SHOWN_KEY)) {
            return;
        }
        const views =
            Number(readStorage(window.sessionStorage, PAGE_VIEWS_KEY) || 0) + 1;
        writeStorage(window.sessionStorage, PAGE_VIEWS_KEY, String(views));
        if (views >= MIN_PAGE_VIEWS) {
            setEligible(true);
        }
    }, [pathname]);

    // Show on exit intent (desktop) or after a period of inactivity.
    useEffect(() => {
        if (!eligible || open) {
            return undefined;
        }

        const show = () => {
            if (readStorage(window.localStorage, SHOWN_KEY)) {
                return;
            }
            writeStorage(window.localStorage, SHOWN_KEY, 'true');
            setOpen(true);
        };

        let idleTimer = setTimeout(show, IDLE_MS);
        const resetIdle = () => {
            clearTimeout(idleTimer);
            idleTimer = setTimeout(show, IDLE_MS);
        };

        const onMouseOut = (event) => {
            if (!event.relatedTarget && event.clientY <= 0) {
                show();
            }
        };

        const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
        activityEvents.forEach((name) =>
            window.addEventListener(name, resetIdle, { passive: true })
        );
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            clearTimeout(idleTimer);
            activityEvents.forEach((name) =>
                window.removeEventListener(name, resetIdle)
            );
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, [eligible, open]);

    // Close on Escape and move focus into the dialog when it opens.
    useEffect(() => {
        if (!open) {
            return undefined;
        }
        primaryButtonRef.current?.focus();
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    if (!open) {
        return null;
    }

    const close = () => setOpen(false);

    return (
        <div className={styles.overlay} onClick={close}>
            <div
                className={styles.dialog}
                role='dialog'
                aria-modal='true'
                aria-labelledby='survey-popup-title'
                aria-describedby='survey-popup-text'
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type='button'
                    className={styles.closeButton}
                    aria-label='Close'
                    onClick={close}
                >
                    ×
                </button>
                <h2 id='survey-popup-title' className={styles.title}>
                    Help us improve the Sauce Labs docs
                </h2>
                <p id='survey-popup-text' className={styles.text}>
                    Take a short card sort exercise and tell us how you&apos;d
                    organize our documentation.
                </p>
                <div className={styles.actions}>
                    <a
                        ref={primaryButtonRef}
                        className='button button--primary'
                        href={SURVEY_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={close}
                    >
                        Take the card sort
                    </a>
                    <button
                        type='button'
                        className='button button--secondary'
                        onClick={close}
                    >
                        No thanks
                    </button>
                </div>
            </div>
        </div>
    );
};

export { SurveyPopup };
