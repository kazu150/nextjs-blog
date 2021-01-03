export default (req, res) => {
    const {
        query: { pid },
    } = req
    // const pid = req.query.pid

    res.end(`Post: ${pid}`)
}

// 詳細ページ等で使うと便利