import { Component, OnInit, ViewChild, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  case_breakup_canvas: any;
  case_breakup_ctx: any;
  @ViewChild('caseBreakupDataChart') caseBreakupDataChart;

  source_cl_canvas: any;
  source_cl_ctx: any;
  @ViewChild('sourceBasedClassificationChart') sourceBasedClassificationChart;

  constructor(private router:Router) {

    this.router.events.subscribe(()=>{
      this.ngOnInit();
    })

   }

  ngOnInit() {
    
    this.getSourceBasedClassification();
    this.getCaseBreakupData();
  }
 
   getCaseBreakupData(){
    // var pieChartCanvas = $('#caseBreakupDataChart').get(0).getContext('2d')
    // var pieData        = {
    //   labels: [
    //       'Trading Partner', 
    //       'Sale Rep',
    //       'Regulatory', 
    //       'Spontaneous', 
    //       'Clinical', 
    //       'Patient Assistence Program', 
    //   ],
    //   datasets: [
    //     {
    //       data: [700,500,400,600,300,100],
    //       backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
    //     }
    //   ]
    // }
    // var pieOptions     = {
    //   legend: {
    //     display: false
    //   },
    //   animation: {
    //             animateScale: true,
    //             animateRotate: true
    //           }
    // }
    // var pieChart = new Chart(pieChartCanvas, {
    //   type: 'doughnut',
    //   data: pieData,
    //   options: pieOptions      
    // })
    this.case_breakup_canvas = this.caseBreakupDataChart.nativeElement; 
    this.case_breakup_ctx = this.case_breakup_canvas.getContext('2d');
  
    let caseBreakupDataChart = new Chart(this.case_breakup_ctx, {
      type: 'doughnut',
      
      data: {
        labels: [
          'Drug Interaction', 
          'Medication Error',
          'Adverse Drug Reaction', 
          'Drug Abuse', 
          'Lack Of Afficacy', 
          'Counterfeit Medicines', 
        ],
        datasets: [
          {
          data: [600,300,700,300,900,200],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Case Break-up',
          position:'bottom'
        },
        animation: {
                  animateScale: true,
                  animateRotate: true,
                  hover: true
                }
      }
    });
   }

   getSourceBasedClassification(){
    this.source_cl_canvas = this.sourceBasedClassificationChart.nativeElement; 
    this.source_cl_ctx = this.source_cl_canvas.getContext('2d');
  
    let sourceBasedClassificationChart = new Chart(this.source_cl_ctx, {
      type: 'doughnut',
      
      data: {
        labels: [
            'Trading Partner', 
            'Sale Rep',
            'Regulatory', 
            'Spontaneous', 
            'Clinical', 
            'Patient Assistence Program', 
        ],
        datasets: [
          {
            data: [700,500,400,600,300,100],
            backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Source Based Classification',
          position:'bottom'
        },
        animation: {
                  animateScale: true,
                  animateRotate: true,
                  hover: true
                }
      }
    });
   }
}
