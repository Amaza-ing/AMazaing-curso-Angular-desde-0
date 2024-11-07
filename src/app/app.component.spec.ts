import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('title should be correct', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const title = fixture.nativeElement.querySelector('h1');

    expect(title.textContent).toBe('Testing Angular with Jasmine');
  });

  it('form should be invalid if required fields are empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.movieForm.controls['name'].setValue('');
    app.movieForm.controls['duration'].setValue('');

    expect(app.movieForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.movieForm.controls['name'].setValue('Star Wars');
    app.movieForm.controls['duration'].setValue('200');

    expect(app.movieForm.valid).toBeTruthy();
  });

  it('btn should send the form when clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const sendBtn = fixture.nativeElement.querySelector('#send-btn');
    sendBtn.click();

    expect(app.sentMsg).toBe('Enviado');
    
    // fixture.detectChanges();
    // const sentMsg = fixture.nativeElement.querySelector("#sent-msg");
    // expect(sentMsg.textContent).toBe("Enviado");
  });
});
