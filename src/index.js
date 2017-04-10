 /* eslint-disable no-console */
import { exec } from 'child_process';

const SKETCH_TOOL = '/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool';

export default (
  {
    render = true,
    bundle,
    command = 'main',
  } = {},
) => ({
  name: 'render',
  onwrite() {
    if (render && bundle) {
      exec(`${SKETCH_TOOL} run ${bundle} ${command}`, (err, stdout) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
      });
    }
  },
});
