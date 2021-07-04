
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContentView, GridUnitType, Page, SwipeGestureEventData, } from "@nativescript/core";
import { RouterExtensions } from '@nativescript/angular';
import {
    LayersService,
    SlideUpFadeStagger,
    Icons,
    NavigationService,
    Routes,
} from "@app/core";
import { registerElement } from '@nativescript/angular';
import { Carousel, CarouselItem } from 'nativescript-carousel';
registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);
@Component({
    selector: "ns-welcome",
    templateUrl: "welcome.component.html"
})
export class WelcomeComponent implements OnInit, AfterViewInit {
    @ViewChild('myCarousel', { static: false }) carouselView: ElementRef<Carousel>;


    myData = new Array<any>(
        { pageNr: 1, title: 'Page 1', color: '#b3cde0', image: '~/assets/images/movies/frozen.png' },
        { pageNr: 2, title: 'Page 2', color: '#6497b1', image: '~/assets/images/movies/jurassic-park.png' },
        { pageNr: 3, title: 'Page 3', color: '#005b96', image: '~/assets/images/movies/frozen.png' },
        { pageNr: 4, title: 'Page 4', color: '#03396c', image: '~/assets/images/movies/frozen.png' }
    );
    isRtl = false;//Utils.isRtl;

    carouselItems = [
        {
            title: 'Biggest Sell at Your Fingerprint',
            title_ar: 'أكبر بيع في بصمة إصبعك',
            subTitle: 'Find your best products from popular shop without any delay',
            subTitle_ar: 'اعثر على أفضل منتجاتك من متجر شعبي دون أي تأخير',
            image: '~/assets/images/movies/frozen.png'
        },
        {
            title: 'Pay Secure Payment Getway',
            title_ar: 'أكبر بيع في بصمة إصبعك',
            subTitle: 'Find your best products from popular shop without any delay',
            subTitle_ar: 'اعثر على أفضل منتجاتك من متجر شعبي دون أي تأخير',
            image: '~/assets/images/movies/jurassic-park.png'
        },
        {
            title: 'Get Faster and Safe Delivery',
            title_ar: 'أكبر بيع في بصمة إصبعك',
            subTitle: 'Find your best products from popular shop without any delay',
            subTitle_ar: 'اعثر على أفضل منتجاتك من متجر شعبي دون أي تأخير',
            image: '~/assets/images/movies/frozen.png'
        }
    ]

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions,
        private navigationService: NavigationService
        //private utils: Utils
    ) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    i = 0;
    nextPage() {
        this.i = this.i + 1
        console.log("Page select : ", this.i);
        this.carouselView.nativeElement.selectedPage = this.i;
        if (this.i > 2)
            this.navigationService.navigate(Routes.auth_login, null, true);
        // this.routerExtensions.navigate(['/home'], { clearHistory: true });
    }
    skipPages() {
        this.routerExtensions.navigate(['/'], { clearHistory: true });
    }
    ngAfterViewInit(): void { }

    myChangePageEvent(args: any): void {
        var changeEventText = 'Changed to slide index: ' + args.index;
        console.log(changeEventText);
    }
    myTapPageEvent(): void {
        console.log('Tapped page: ' + (this.carouselView.nativeElement.selectedPage + 1));
    }
    selectPageThree(): void {
        this.carouselView.nativeElement.selectedPage = 2;
    }

    addNewPage(): void {
        let itemList = [...this.myData];
        let pagenr = this.myData.length + 1;
        let color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        itemList.push({ pageNr: pagenr, title: `Slide ${pagenr}`, color: color, image: '' });
        console.log('push item, update array');
        this.myData = itemList;

        setTimeout(() => {
            if (this.carouselView) {
                let selectPage = this.myData.length - 1;
                console.log('focus on page index: ', selectPage);
                this.carouselView.nativeElement.selectedPage = selectPage;
            }
        }, 100);
    }



}