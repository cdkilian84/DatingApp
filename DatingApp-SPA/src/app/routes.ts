import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent,
                resolve: { users: MemberListResolver } },
            { path: 'members/:id', component: MemberDetailComponent,
                resolve: { user: MemberDetailResolver } },
            { path: 'member/edit', component: MemberEditComponent,
                resolve: { user: MemberEditResolver }, canDeactivate: [PreventUnsavedChanges] },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

// NOTE: "Routes" above acts similar to switch statement in that it's fall-through
// router looks for a matching path starting with home and ending with the wildcard
// Means ordering is important!

// This file referenced in app.module imports: RouterModule.forRoot(appRoutes)
// see vid 67 for discussion of use of "dummy" path above (empty path with children for route guarding)
