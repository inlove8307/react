import defaultProperty from "@/config/defaultProperty";
import localProperty from "@/config/localProperty";
import devProperty from "@/config/devProperty";
import stgProperty from "@/config/stgProperty";
import prodProperty from "@/config/prodProperty";
import _ from 'lodash';

export default function handler(req, res) {
    let serverEnv = _.trim(process.env.ServerEnv);
    console.log(`server Env = [${serverEnv}]`);

    let selectProperty = null;

    switch(serverEnv) {
        case 'dev': selectProperty = devProperty; break;
        case 'stg': selectProperty = stgProperty; break;
        case 'prod': selectProperty = prodProperty; break;
        default: selectProperty = localProperty; break;
    }
    

    res.status(200).json({
        property: {
            ...defaultProperty,
            ...selectProperty
        }
    });
}