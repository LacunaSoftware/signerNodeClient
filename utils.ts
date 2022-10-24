import { readFileSync } from 'fs'

export function getBase64(filepath: string){
    return readFileSync(filepath, {encoding: 'base64'});
}