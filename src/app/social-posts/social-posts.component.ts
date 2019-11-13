import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  constructor() {}
  formVisible: boolean = false;
  posts: Post[] = [
    {
      title: "who am i?",
      thought:
        "i find myself walking around alone, thinking how did i get here? this is not my beautiful house"
    },
    {
      title: "i wonder what my dogs are doing",
      thought: "i hope they're not misbehaving while i'm not home..."
    },
    {
      title: "why do people like white chocolate?",
      thought: "it's basically just sugar flavored cream junk"
    },
    {
      title: "last night i dreamed i fell into an icy pit",
      thought: "i woke up cold"
    }
  ];
  onSubmit(e): void {
    // add post here, event item is e
    this.posts.push({ title: e[0], thought: e[1] });
    this.formVisible = false;
  }
  onDelete(e): void {
    // alert("HEY");
    this.posts.splice(e, 1);
  }
  ngOnInit() {}
}
