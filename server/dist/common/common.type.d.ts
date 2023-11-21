interface Record {
    total: {
        winCount: number;
        looseCount: number;
    };
    multiplePremise: {
        winCount: number;
        looseCount: number;
    };
}
export interface RecordMap {
    [id: string]: {
        totalRecord: Record;
    };
}
export interface relativeRecordMap {
    [id: string]: {
        relativeRecord: {
            [relativeId: string]: Record;
        };
    };
}
export {};
