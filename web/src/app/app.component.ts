import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ResolveEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private readonly title: Title,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.setupTitleListener();
  }

  private setupTitleListener() {
    this.router.events
      .pipe(filter(ev => ev instanceof ResolveEnd))
      .subscribe((ev: any) => {
        const { data } = getDeepestChildSnapshot(ev.state.root);
        if (data && data['title']) {
          this.title.setTitle(data['title']);
        }
      })
  }
}

function getDeepestChildSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let deepestChild = snapshot.firstChild;
  while (deepestChild!.firstChild !== null) {
    deepestChild = deepestChild!.firstChild;
  }
  return deepestChild || snapshot;
}