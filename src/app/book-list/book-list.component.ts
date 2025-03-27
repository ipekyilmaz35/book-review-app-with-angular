import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [
    { 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      review: 'A dazzling portrait of the American Dream that exposes the hollowness beneath the glitter.', 
      rating: 5, 
      genre: 'Classic/Literary Fiction',
      publishedYear: 1925,
      pageCount: 180,
      isVisible: false 
    },
  
    { 
      title: 'The Hobbit', 
      author: 'J.R.R. Tolkien', 
      review: 'A timeless fantasy adventure about Bilbo Baggins’ quest to reclaim treasure from the dragon Smaug.', 
      rating: 5, 
      genre: 'Fantasy/Adventure',
      publishedYear: 1937,
      pageCount: 310,
      isVisible: false 
    },
    { 
      title: 'The Lord of the Rings', 
      author: 'J.R.R. Tolkien', 
      review: 'An epic trilogy of friendship, war, and the struggle against ultimate evil in Middle-earth.', 
      rating: 5, 
      genre: 'Fantasy/Epic',
      publishedYear: 1954,
      pageCount: 1178,
      isVisible: false 
    },
    { 
      title: 'Crime and Punishment', 
      author: 'Fyodor Dostoevsky', 
      review: 'A psychological masterpiece exploring guilt, morality, and redemption through a murderer’s turmoil.', 
      rating: 4, 
      genre: 'Classic/Psychological Fiction',
      publishedYear: 1866,
      pageCount: 430,
      isVisible: false 
    },
    { 
      title: 'The Alchemist', 
      author: 'Paulo Coelho', 
      review: 'A philosophical fable about following dreams and discovering life’s hidden treasures.', 
      rating: 4, 
      genre: 'Philosophical Fiction',
      publishedYear: 1988,
      pageCount: 208,
      isVisible: false 
    },
    { 
      title: 'The Diary of a Young Girl', 
      author: 'Anne Frank', 
      review: 'A poignant firsthand account of hope and resilience during the Holocaust.', 
      rating: 5, 
      genre: 'Memoir/Historical',
      publishedYear: 1947,
      pageCount: 283,
      isVisible: false 
    },
    { 
      title: 'The Kite Runner', 
      author: 'Khaled Hosseini', 
      review: 'A heartbreaking story of betrayal and redemption set in Afghanistan’s turbulent history.', 
      rating: 4, 
      genre: 'Historical Fiction',
      publishedYear: 2003,
      pageCount: 371,
      isVisible: false 
    },
    { 
      title: 'The Hitchhiker’s Guide to the Galaxy', 
      author: 'Douglas Adams', 
      review: 'A hilarious sci-fi romp through space with existential wit and absurdity.', 
      rating: 5, 
      genre: 'Science Fiction/Comedy',
      publishedYear: 1979,
      pageCount: 216,
      isVisible: false 
    },
    { 
      title: 'The Book Thief', 
      author: 'Markus Zusak', 
      review: 'A WWII tale narrated by Death, celebrating the power of words and human resilience.', 
      rating: 5, 
      genre: 'Historical Fiction',
      publishedYear: 2005,
      pageCount: 552,
      isVisible: false 
    },
    { 
      title: 'The Handmaid’s Tale', 
      author: 'Margaret Atwood', 
      review: 'A dystopian nightmare about gender oppression that feels eerily prescient.', 
      rating: 4, 
      genre: 'Dystopian/Feminist Fiction',
      publishedYear: 1985,
      pageCount: 311,
      isVisible: false 
    },
    { 
      title: 'Sapiens: A Brief History of Humankind', 
      author: 'Yuval Noah Harari', 
      review: 'A mind-bending exploration of how humans came to dominate the planet.', 
      rating: 5, 
      genre: 'Nonfiction/Anthropology',
      publishedYear: 2011,
      pageCount: 443,
      isVisible: false 
    }
  ];


  showScrollTopButton = false;

  constructor() { }

  ngOnInit(): void {}

  toggleReview(book: any): void {
    book.isVisible = !book.isVisible;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.pageYOffset > 200) {  
      this.showScrollTopButton = true;
    } else {
      this.showScrollTopButton = false;
    }
  }
}