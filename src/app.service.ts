import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { PredictionStatus } from 'src/prediction.status';

@Injectable()
export class AppService {
    private readonly subject = new Subject<PredictionStatus>();

    subscribe() {
        return this.subject;
    }

    emit(status: PredictionStatus) {
        this.subject.next(status);
    }
}
