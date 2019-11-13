import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  // @Input() index: number;
  constructor() {}
  @Output() deleted = new EventEmitter<number>();
  deletePost() {
    this.deleted.emit();
    // alert("POBBT");
  }
  ngOnInit() {}
}
