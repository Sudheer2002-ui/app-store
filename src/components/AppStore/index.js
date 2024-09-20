import {Component} from 'react'

import './index.css'

import TabItem from '../TabItem'

import AppItem from '../AppItem'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.facebook.com',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.messenger.com',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.whatsapp.com',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.instagram.com',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.snapchat.com',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.twitter.com',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.pinterest.com',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.wechat.com',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    websiteUrl: 'https://www.linkedin.com',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    websiteUrl: 'https://telegram.org',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    websiteUrl: 'https://subwaysurfers.com',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    websiteUrl: 'https://www.crossyroad.com',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    websiteUrl: 'https://www.superchef.com',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    websiteUrl: 'https://www.angrybirds.com',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    websiteUrl: 'https://www.hillclimb2.com',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    websiteUrl: 'https://www.templerun.com',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    websiteUrl: 'https://www.drdriving.com',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    websiteUrl: 'https://www.smurfsbubble.com',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    websiteUrl: 'https://www.gradelearning.com',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    websiteUrl: 'https://talkingfriends.com',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    websiteUrl: 'https://www.inshorts.com',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    websiteUrl: 'https://www.way2news.com',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    websiteUrl: 'https://news.google.com',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    websiteUrl: 'https://flipboard.com',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    websiteUrl: 'https://www.smartnews.com',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    websiteUrl: 'https://www.bbc.com/news',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    websiteUrl: 'https://www.cnn.com',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    websiteUrl: 'https://www.dailywire.com',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    websiteUrl: 'https://apnews.com',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    websiteUrl: 'https://www.newsbreak.com',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    websiteUrl: 'https://www.zomato.com',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    websiteUrl: 'https://www.swiggy.com',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    websiteUrl: 'https://www.dominos.com',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    websiteUrl: 'https://www.allinone.com',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    websiteUrl: 'https://www.instacart.com',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    websiteUrl: 'https://www.saucey.com',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    websiteUrl: 'https://www.waitrapp.com',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    websiteUrl: 'https://www.grubhub.com',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    websiteUrl: 'https://www.mercato.com',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    websiteUrl: 'https://www.dotapp.com',
  },
]
class AppStore extends Component {
  state = {category: tabsList[0].tabId, searchInput: ''}

  onTabChange = tabId => {
    this.setState({category: tabId})
  }

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchApps = apps => {
    const {searchInput} = this.state
    const searchedApps = apps.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return searchedApps
  }

  onFilteringApps = () => {
    const {category} = this.state
    const filteredAppList = appsList.filter(
      eachApp => eachApp.category === category,
    )
    return filteredAppList
  }

  render() {
    const {category, searchInput} = this.state
    const filterApplist = this.onFilteringApps()
    const finalApps = this.searchApps(filterApplist)

    return (
      <div className="bg">
        <h1 className="heading">App Store</h1>
        <div className="searchdiv">
          <input
            className="inp"
            type="search"
            placeholder="Search"
            onChange={this.searchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt="search icon"
            className="imga"
          />
        </div>
        <ul className="lul">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              onTabChange={this.onTabChange}
              isActive={category === eachTab.tabId}
            />
          ))}
        </ul>
        <ul className="appdiv">
          {finalApps.map(eachApp => (
            <AppItem key={eachApp.appId} appDetails={eachApp} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore
