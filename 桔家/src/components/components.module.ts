import { NgModule } from '@angular/core';
import { TuijianComponent } from './tuijian/tuijian';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
@NgModule({
	declarations: [TuijianComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)],
	exports: [TuijianComponent]
})
export class ComponentsModule {}
