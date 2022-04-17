import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

interface Answer {
    html: string;
    text: string
}
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  isValid: boolean = false;
  queryString: string = '';
  answer!: Answer | null
  loading = false;
  constructor(
    private httpService: HttpService,
    public loader : SpinnerService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.loading = true;
    const { value, valid } = form
    this.queryString = value.query.trim();
    this.isValid = valid;
    form.reset();
    this.fetchAnswer();
  }

  fetchAnswer() {
    this.answer = null;
    this.httpService.get(this.queryString).subscribe(res => this.answer = res.answer ?? 'לא מצאתי תשובה' );
  }

}

