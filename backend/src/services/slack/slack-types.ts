import { TProjectPermission } from "@app/lib/types";

export type TGetSlackInstallUrlDTO = TProjectPermission;

export type TCompleteSlackIntegrationDTO = {
  projectId: string;
  teamId: string;
  teamName: string;
  slackUserId: string;
  slackAppId: string;
  botAccessToken: string;
  slackBotId: string;
  slackBotUserId: string;
};
