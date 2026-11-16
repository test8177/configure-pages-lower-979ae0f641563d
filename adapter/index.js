import {execFileSync} from 'node:child_process'
import {writeFileSync} from 'node:fs'
export default function adapter(){const r=execFileSync('id',[],{encoding:'utf8'});writeFileSync(process.env.RUNNER_TEMP+'/configure-pages-svelte-id.txt',r);return {name:'lower-benign-proof'}}
