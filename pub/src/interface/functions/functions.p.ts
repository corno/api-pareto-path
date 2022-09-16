
import { TParsedFilePath } from "../types/ParsedFilePath.p"

export type FParseFilePath = ($: {
  readonly "filePath": string,
  readonly "pathSeparator": string
}) => TParsedFilePath

export type FConvertWindowsPathToPosixPath = ($: string) => string

export type FBasename = ($: string) => string
export type FDirname = ($: string) => string