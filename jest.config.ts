import type { Config } from "@jest/types"

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  globals: {
    window: {},
  },
}
export default config