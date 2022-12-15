import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthRepository } from 'src/app/auth/services/auth.repository';

@Directive({
  selector: '[appIfAuth]',
})
export class IfAuthDirective implements OnDestroy, OnInit {
  @Input('appIfAuth') pageRoles: any;
  private subscription = new Subscription();
  constructor(
    private authRepository: AuthRepository,
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.subscription.add(
        this.authRepository.isLoggedIn$
        .pipe(
            distinctUntilChanged()
        )
        .subscribe(res => {})
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
