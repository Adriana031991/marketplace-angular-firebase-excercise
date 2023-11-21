import { Component, Input } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'lib-countdown-timer',
  template: `
<div class="ps-product__expires">

<p>Expires In</p>

<ul class="ps-countdown" data-time="July 21, 2020 23:00:00">

    <li><span class="days">{{time.days}}</span>
        <p>Days</p>
    </li>

    <li><span >{{time.hours}}</span>
        <p>Hours</p>
    </li>

    <li><span >{{time.minutes}}</span>
        <p>Minutes</p>
    </li>

    <li><span class="seconds">{{time.seconds}}</span>
        <p>Seconds</p>
    </li>

</ul>

</div>
  `,
  styles: [
    ` span {
      display: inline-block !important;
      margin-bottom: 10px !important;
      width: 56px !important;
      height: 56px !important;
      border: 1px solid #ccc !important;
      display: -webkit-box !important;
      display: flex !important;
      -webkit-box-pack: center !important;
      justify-content: center !important;
      -webkit-box-align: center !important;
      align-items: center !important;
      color: #dd2400 !important;
      font-weight: 600 !important;
      font-size: 20px !important;
  }`
  ]
})
export class CountdownTimerComponent {
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  @Input() finishDateString: string = '';
  finishDate: Date = new Date();


  ngOnInit(): void {
    // Inicializamos el momento que falta hasta llegaral tiempo objetivo con valores en 0
    this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };
    // Creamos la fecha a partir de la fecha en formato string AAAA-MM-dd HH:mm:ss
    this.finishDate = new Date(this.finishDateString);

    this.start().subscribe((_: any) => console.log(""));
  }

  updateTime() {

    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();
    // console.log(diff)

    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
    // console.log(this.time);

  }

  // Ejecutamos la acción cada segundo, para obtener la diferencia entre el momento actual y el objetivo
  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }

}
