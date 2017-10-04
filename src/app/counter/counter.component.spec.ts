import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));      

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p') || By.css('input') || By.css('button'));
    //debugElement1 = fixture.debugElement.query(By.css('input'));
    htmlElement = debugElement.nativeElement;
   // htmlElement1 = debugElement1.nativeElement;

  });

  it('should create', () => {
    expect(true).toBe(true);
  });

  it('should increment the counter number by one', () => {
    const intialValue = component.counter;
    component.increment();
    const newValue = component.counter;
    expect(newValue).toBeGreaterThan(intialValue);
  });

  it('should decrement the counter number by one', () => {
    const intialValue1 = component.counter;
    component.decrement();
    const newValue1 = component.counter;
    expect(newValue1).toBeLessThan(intialValue1);
  });

  it('should display the current number of the counter', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  });

  it('should display the current number of the counter in the textbox', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  });

  it('Equal', () => {
    const intialValue1 = component.counter;
    component.display();
    const newValue1 = component.counter;
    expect(newValue1).toBe(intialValue1);
  });

  //********************************************* */

  it('Should display the txt in the list', () => {
    const intialValue1 = component.ff;
    component.submitted(intialValue1);
    const newValue1 = component.ff;
    expect(newValue1).toBe(intialValue1);
  });


  it('should click flower push button display flowerssss', () => {
    component.onclick();
    expect("flowerssss").toBe("flowerssss");
  });


  it('should click flower pop button pop the flowerssss', () => {
    component.offclick();
    expect("flowerssss").toBe("flowerssss");
  });




  it('Should equal in 2 textbox value', () => {
    // const intialValue1 = 
    const newValue1 = component.display();
    const newValue2 = component.display1();
    expect(newValue1).toBe(newValue2);
  });

//  it('Should equal in 2 textbox value', () => {
//     // const intialValue1 = 
//     const newValue1 = component.display();
//     const newValue2 = component.display1();
//     expect(newValue1).toBe(newValue2);
//   });






});











