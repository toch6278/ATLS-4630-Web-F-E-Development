// const esbuild = require('esbuild');
require('esbuild')
//asynchronous funciton 
    .build({
        entryPoints: ['js/main.js'], 
        outfile: 'bundle.js', 
        bundle: true,
        watch: {
            onRebuild(error, result) {
                if(error) 
                {
                    console.error(error); 
                }
                else
                {
                    console.log('watch rebuild is true');
                }
                
            }
        }, 
        sourcemap: true, 
        minify: true,
    })
    .then(() => console.log('watching...'))
    .catch(() => ProcessingInstruction.exit(1));