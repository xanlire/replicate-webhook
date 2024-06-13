import {PredictionStatus} from 'src/prediction.status';

export type Prediction = {
    id: string;
    model: string;
    version: string;
    input: {
        text: string;
    };
    logs: string;
    output: string;
    error: string;
    status: PredictionStatus;
    created_at: Date;
    data_removed: boolean;
    tarted_at: Date;
    completed_at: Date;
    metrics: {
        predict_time: number;
    };
    urls: {
        cancel: string;
        get: string;
    };
};
