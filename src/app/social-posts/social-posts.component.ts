import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  constructor() {}
  formVisible: boolean = true;
  posts: Post[] = [
    { title: "hmmm", thought: "givin' it the biiiiig think" },
    { title: "hmmm", thought: "givin' it the biiiiig think" },
    { title: "hmmm", thought: "givin' it the biiiiig think" },
    { title: "hmmm", thought: "givin' it the biiiiig think" }
  ];
  ngOnInit() {}
}
