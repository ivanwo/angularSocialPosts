import { BrowserModule } from "@angular/platform-browser";
import { NgModule, EventEmitter, Output, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SocialPostsComponent } from "./social-posts/social-posts.component";
import { PostComponent } from "./post/post.component";
import { PostFormComponent } from "./post-form/post-form.component";

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
