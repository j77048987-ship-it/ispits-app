import { QuestionRepository } from "./db/QuestionRepository";
import { AttemptRepository } from "./db/AttemptRepository";
import { SettingsRepository } from "./db/SettingsRepository";
import type { IQuestionRepository } from "../core/repositories/IQuestionRepository";
import type { IAttemptRepository } from "../core/repositories/IAttemptRepository";
import type { ISettingsRepository } from "../core/repositories/ISettingsRepository";

/**
 * Deliberately simple composition root (constructor injection via plain object, not a DI
 * framework): this is the *only* file in the app that imports a concrete repository class.
 * Every feature/service imports the `IXxxRepository` interface and receives an instance from
 * here — swapping Dexie for something else later means editing only this file.
 */
export interface Container {
  questionRepository: IQuestionRepository;
  attemptRepository: IAttemptRepository;
  settingsRepository: ISettingsRepository;
}

export const container: Container = {
  questionRepository: new QuestionRepository(),
  attemptRepository: new AttemptRepository(),
  settingsRepository: new SettingsRepository()
};
