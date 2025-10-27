import { AnswerId, QuestionId } from "../../../api/types";

export type SubscriptionId = string;
export type Responses = Record<QuestionId, AnswerId>;

export type SubscriptionAction = {
  subscriptionId: string;
  action: string;
  timestamp: number;
}

export type User = {
  id: string;
  name?: string;
  currentSubscriptionId?: string;
  data: Record<SubscriptionId, Responses>;
  actions: SubscriptionAction[];
}