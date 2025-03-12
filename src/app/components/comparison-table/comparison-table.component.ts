import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparison-table',
  standalone: true, // ✅ Make it a standalone component
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css'],
  imports: [CommonModule] // ✅ Import CommonModule for *ngFor to work
})
export class ComparisonTableComponent {
  features = [
    { category: 'إدارة الدورات', items: ['تحكم كامل بالدورات', 'إنشاء مسارات مخصصة', 'إدارة المتعلمين'] },
    { category: 'التقارير والتحليلات', items: ['نشاط المستخدمين', 'تقارير الأداء', 'تقارير تسجيل الدخول'] },
    { category: 'التكاملات', items: ['تسجيل دخول موحد', 'تكامل LMS'] },
    { category: 'الدعم', items: ['دعم مخصص للمديرين'] }
  ];

  plans = {
    teams: ['✔', '✔', '✔', '✔', '✔', '✔', '✔', '—', '—', '—'],
    enterprises: ['✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔']
  };
}
