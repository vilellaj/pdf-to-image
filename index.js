const PDF2Pic = require("pdf2pic");
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        console.log('Reading files to convert...');
        const root = '/var/files';
        const files = await fs.promises.readdir(root);

        files.forEach(async (file) => {
            console.log('Converting', file);
            if (file.indexOf('.pdf') > -1) {
                const filePath = path.join(root, file);

                const pdf2pic = new PDF2Pic({
                    density: 100,           // output pixels per inch
                    savename: file.split('.')[0],   // output file name
                    savedir: "/var/files",    // output file location
                    format: "png",          // output file format
                    size: "600x600"         // output size in pixels
                });

                pdf2pic.convertBulk(filePath, -1).then((resolve) => {
                    console.log("image converted successfully!");
                    return resolve;
                });
            }
        });
    } catch (err) {
        console.log('Erro')
        console.error(err);
    }
})();