module.exports = function (context) {
    const { siteConfig } = context  //
    const { themeConfig } = siteConfig

    if (!themeConfig.beamer) {
        throw new Error(
            'You need to specify `beamer` object in `themeConfig` '
            + 'with `product_id` field in it to use beamer'
        )
    }
    if (!themeConfig.beamer.product_id) {
        throw new Error(
            'You specified the `goatCounter` object in `themeConfig`, '
            + 'but the `product_id` field was missing. '
        )
    }

    const product_id = `product_id: ${themeConfig.beamer.product_id}`
    const selector = `selector: ${themeConfig.beamer.product_id}`
    const display = `display: ${themeConfig.beamer.display}` /* Choose how to display Beamer panel */
    const top = `top: ${themeConfig.beamer.top}` /* Top position offset for notification bubble */
    const bottom = `bottom: ${themeConfig.beamer.bottom}` /* Bottom position offset for notification bubble */
    const button_position = `button_position: ${themeConfig.beamer.button_position}`

    return {
        name: 'docusaurus-plugin-beamer',
        injectHtmlTags: () => { // Adds additional HTML to every page
            return {
                headTags: [
                    {
                        tagName: 'script',
                        innerHTML: `
                        var beamer_config = { 
                            ${ product_id },
                            ${ selector },
                            ${ display },
                            ${ top },
                            ${ bottom },
                            ${ button_position },
                        };`
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            type: 'text/javascript',
                            src: 'https://app.getbeamer.com/js/beamer-embed.js',
                            defer: true,
                        }
                    },
                ],

            }
        },
    }
}