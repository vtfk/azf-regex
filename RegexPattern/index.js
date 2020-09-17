module.exports = async function (context, req) {
    let { text, pattern, replacement = '_' } = req.body;

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

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: text.replace(regexp, replacement)
    };
}