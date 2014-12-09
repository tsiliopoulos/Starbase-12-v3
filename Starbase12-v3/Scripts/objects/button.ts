// Button Object Class
module objects {
    export class Button extends objects.GameObject {
        constructor(x: number, y: number, buttonIDString: string) {
            super(buttonIDString);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 