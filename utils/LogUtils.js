export default {
    printErrorLog(error) {
        const errorMsg = error.stack ? error.stack : error;

        if (error.isAleadyPrintError) {
            return;
        }

        if (error.customMessage) {
            this.error(error.customMessage, errorMsg);
            
        } else {
            this.error(errorMsg);
        }

        error.isAleadyPrintError = true;
    },

    debug() {
        console.log.apply(null, ['DEBUG', ...arguments]);
    },

    info() {
        console.log.apply(null, ['INFO', ...arguments]);
    },

    trace() {
        console.log.apply(null, ['TRACE', ...arguments]);
    },
    error() {
        console.error.apply(null, ['ERROR', ...arguments]);
    },
    getComponentLog(name) {
        const self = this;    
        return {
            debug() {
                self.debug.apply(null, [`[${name}]`, ...arguments]);
            },
        
            info() {
                self.info.apply(null, [`[${name}]`, ...arguments]);
            },
        
            trace() {
                self.trace.apply(null, [`[${name}]`, ...arguments]);
            },

            error() {
                self.error.apply(null, [`[${name}]`, ...arguments]);
            }
        }
    }
}