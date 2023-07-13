import { ConfigService } from "@bp-core/services/config/config.service"

export function appInitializer(config: ConfigService) {
	return () => {
		return config.loadConfig()
	}
}
