module.exports = async function (context, req) {
    const regexReplacer = (text, pattern, replacement = '_') => {
        if (!text || !pattern) {
            context.res = {
                status: 400,
                body: 'Please specify "text" and "pattern"'
            };
            return;
        }

        // remove unneccessaryrrrrr trailing and ending '/'
        pattern = pattern.replace(/(^\/)|(\/$)/g, '');

        // regex pattern
        const regexp = new RegExp(pattern, 'g');

        return text.replace(regexp, replacement);
    };

    if (req.body.chainedReplacers !== undefined) {
        let { text } = req.body;
        req.body.chainedReplacers.map(chainedReplacer => {
            context.log(`Text: '${text}' -- Find: '${chainedReplacer.pattern}' -- Replacement: '${chainedReplacer.replacement}'`);
            text = regexReplacer(text, chainedReplacer.pattern, chainedReplacer.replacement)
        });

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: text
        };
    }
    else {
        let { text, pattern, replacement } = req.body;

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: regexReplacer(text, pattern, replacement)
        };
    }
}