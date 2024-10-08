import pino from 'pino';
import pinoPretty from 'pino-pretty';
import moment from 'moment';

const logger = pino({
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${moment().format()}"`
}, pinoPretty());

export default logger;