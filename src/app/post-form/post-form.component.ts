import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  tempThought: string = "";
  tempTitle: string = "";
  tempPost: string[];
  constructor() {}

  @Output() submitted = new EventEmitter();

  submitPost() {
    if (this.tempThought !== "" && this.tempThought !== "") {
      this.tempPost = [this.tempTitle, this.tempThought];
      this.submitted.emit(this.tempPost);
      // alert(this.newPost);
      return false;
    }
  }

  ngOnInit() {}
}
