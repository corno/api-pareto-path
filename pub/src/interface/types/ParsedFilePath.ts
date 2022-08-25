import * as pa from "pareto-core-types"

export type TParsedFilePath = {
    readonly "directoryPath": pa.Array<string>
    readonly "baseName": string
    readonly "extension": null | string
}