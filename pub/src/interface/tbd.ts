
import { TParsedFilePath } from "./types/ParsedFilePath"

export type Function<Data, ResultType> = ($: Data) => ResultType

export type ParseFilePath_Data = {
    filePath: string,
    pathSeparator: string
}

export type ParseFilePath = Function<ParseFilePath_Data, TParsedFilePath>
