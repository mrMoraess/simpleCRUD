const getAll = (req, res) => {
    res.status(200).json({
        "musics": [ "Get out alive", "Deus e eu no sertao", "John Wick's theme", "Caso indefinido" ]
    })
}

module.exports = {
    getAll,
}