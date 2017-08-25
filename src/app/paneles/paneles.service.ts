import { ComponentFactoryResolver, Injectable, Inject,  ReflectiveInjector, ViewContainerRef } from '@angular/core'
import { PanelesComponent } from './paneles.component';

@Injectable()
export class PanelesService {
	/*constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }
  addDynamicComponent() {
    const factory = this.factoryResolver
                        .resolveComponentFactory(PanelesComponent)
    const component = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }*/
}