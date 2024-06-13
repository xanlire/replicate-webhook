import { Body, Controller, Post, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Prediction } from 'src/prediction';
import { map } from 'rxjs';

@Controller('replicate/webhook')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post()
    async handle(@Body() prediction: Prediction) {
        this.appService.emit(prediction.status);
    }

    @Sse('subscribe')
    async subscribe() {
        return this.appService.subscribe().pipe(map((data) => ({ data }) as MessageEvent));
    }
}
