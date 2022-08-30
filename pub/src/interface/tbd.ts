
import { TParsedFilePath } from "./types/ParsedFilePath"

export type Function<Data, ResultType> = ($: Data) => ResultType

export type ParseFilePath_Data = {
    filePath: string,
    pathSeparator: string
}

export type ParseFilePath = Function<
    {
        filePath: string,
    },
    TParsedFilePath
>

export type ConvertWindowsPathToPosixPath = ($: string) => string
