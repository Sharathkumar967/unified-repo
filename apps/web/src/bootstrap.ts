import { initApiClient } from "@unified/services";
import { webTokenStorage } from "./storage/tokenStorage";

initApiClient(webTokenStorage);
