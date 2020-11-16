$(function() {
  const planets = [
    mercury = {
      name: "Mercury",
      description: "Mercury is the smallest and innermost planet of the solar system. The temperature on the surface of Mercury can reach as hot as 425 C during the daytime and as low as -173 C at night.",
      temp: 5,
      gravity: 3.70,
      travelDistance: 0.077
    },
    venus = {
      name: "Venus",
      description: "Venus is the second planet from the Sun. Cities floating on Venus's clouds is currently undergoing R&D.",
      temp: 5,
      gravity: 8.87,
      travelDistance: 0.042
    },
    earth = {
      name: "Earth",
      description: "Welcome to Earth! Original home to humans.",
      temp: 4,
      gravity: 1,
      travelDistance: 0
    },
    mars = {
      name: "Mars",
      description: "Mars is now the second home to humans and is currently being terraformed.",
      temp: 3,
      gravity: 0.38,
      travelDistance: 0.225
    },
    jupiter = {
      name: "Jupiter",
      description: "Jupiter is an absolute unit, being the largest in the solar system. It has a mass of one-thousandth (1/1000) that of the sun, but two-and-a-half times that of all the other planets in the solar system combined.",
      temp: 3,
      gravity: 24.79,
      travelDistance: 0.628730,
      source: "https://en.wikipedia.org/wiki/Jupiter"
    },
    saturn = {
      name: "Saturn",
      description: "Saturn is a gas giant and is the second largest planent in the solar system, following Jupiter. Saturn has an average density of only one-eighth the average density of Earth.",
      temp: 2,
      gravity: 10.44,
      travelDistance: 1.275
    },
    uranus = {
      name: "Uranus",
      description: "Uranus is the third largest planet of the solar system. It is often referred to as an 'ice giant' planet. Uranus hits the coldest temperatures of any planet.",
      temp: 1,
      gravity: 8.87,
      travelDistance: 2.723950,
      source: "https://space-facts.com/uranus/"
    },
    neptune = {
      name: "Neptune",
      description: "Neptune is the last planet within the solar system. It is 17 times the mass of Earth and is the densest giant planet.",
      temp: 1,
      gravity: 11.15,
      travelDistance: 4.3514
    },
    pluto = {
      name: "Pluto",
      description: "Pluto is a dwarf planet found within the Kuiper belt, a ring of bodies beyond the orbit of Neptune. Pluto was the first and largest Kuiper belt object to be discovered in 1930. In 2006 it was demoted to the life of a dwarf planet.",
      temp: 1,
      gravity: 0.62,
      travelDistance: 5.1794,
      source: "https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/in-depth/"
    },
    europa = {
      name: "Europa",
      description: "Europa is a moon in orbit of Jupiter. It is the sixth-closest to the planet out of all the 79 moons of Jupiter. Europa has a possibility of harboring life in its under-ice ocean, perhaps in an evironment closely resembling Earth's deep-ocean hydrothermal vents.",
      temp: 2,
      gravity: 1.315,
      travelDistance: 0.628730
    },
    titan = {
      name: "Titan",
      description: "Titan is the largest moon of Saturn. Titan is the only moon in the solar system to have a dense atmosphere. It is also the only known celestial body, aside from Earth, to have evidence of stable bodies of surface liquid.",
      temp: 1,
      gravity: 1.352,
      travelDistance: 1.275
    },
    ganymede = {
      name: "Ganymede",
      description: "Ganymede is a moon of Jupiter. It is the largest and most massive of the solar system's moons. It is also the only moon within the solar system to have a magnetosphere.",
      temp: 1,
      gravity: 1.428,
      travelDistance: 0.628730
    },
    enceladus = {
      name: "Enceladus",
      description: "Enceladus is the sixth-largest moon of Saturn. It is about 500 kilometers in diameter. Enceladus has been spotted shooting water vapor and ice from cracks in it's frozen crust for many years now. Scientists have since pondered the possibilty of life deep underneath it's crust.",
      temp: 1,
      gravity: 0.113,
      travelDistance: 1.275,
      source: "https://www.latimes.com/science/sciencenow/la-sci-sn-cassini-saturn-enceladus-20170413-story.html"
    },
    io = {
      name: "Io",
      description: "Io is the third-largest of the four Galilean moons of planet Jupiter. It has the highest density for a moon in the solar system.",
      temp: 3,
      gravity: 1.796,
      travelDistance: 0.628730
    },
    triton = {
      name: "Triton",
      description: "Triton is the largest moon of Neptune's thirteen moons. It was the first to be discovered, in 1846. Triton, Io and Venus are the only bodies in the solar system besides Earth that are known to be volcanically active at the present time.",
      temp: 1,
      gravity: 0.779,
      travelDistance: 4.3514,
      source: "https://solarsystem.nasa.gov/moons/neptune-moons/triton/in-depth/"
    },
    phobos = {
      name: "Phobos",
      description: "Phobos is the larger of two moons of Mars. It has a radius of only 11.3 kilometers.",
      temp: 1,
      gravity: 0.0057,
      travelDistance: 0.225
    }
  ]
  const planetDisplay = [ // used for when user changes range input
    0, // earth
    0.5, // venus
    0.5, // mercury
    2, // mars
    6, // jupiter
    12, // saturn
    25, // uranus
    40.5, // neptune
    48 // pluto (yes pluto is a dwarf planet, but they're fun)
  ]

  // clear inputs on load
  $('form').trigger("reset");

  // Take Me There button on header smooth scrolls to first question
  $('.take-quiz').on('click', e => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#temperature-input').offset().top    
    }, 1000);
  });
  $('.to-gravity').on('click', e => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#gravity-input').offset().top
    }, 1000);
  });
  $('.to-travel').on('click', e => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#travel-input').offset().top
    }, 1000);
  });
  $('.get-results').on('click', e => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#planet-output').offset().top
    }, 1000);
  });

  let n = 0;
  $('input[type=range]').on("input", e => { // I use a lot of chaining if statements to ensure it's not a waste of resources (aka brute forcing), there are likely more efficient methods  
    n = e.target.value;
    if (n <= 6) {
      if (n == 2) { // venus, merc
        $('.p2').toggleClass('vis');
        $('.p3').toggleClass('vis');
      } else if (n == 4) { // mars
        $('.p4').toggleClass('vis');
      } else if (n == 6) { // jupiter
        $('.p5').toggleClass('vis');
      }
    } else if (n <= 25) {
      if (n == 12) { // saturn
        $('.p6').toggleClass('vis');
      } else if (n == 25) { // uranus
        $('.p7').toggleClass('vis');
      }
    } else if (n <= 48) {
      if (n == 41) { // neptune
        $('.p8').toggleClass('vis');
      } else if (n == 47) { // pluto
        $('.p9').toggleClass('vis');
      }
    } 
  })

  $('.get-results').on('click', (e) => {
    e.preventDefault();

    let desiredTemp = $('input[name=temperature]:checked').val();
    const gravity = $('input[name=gravity]:checked').val();
    const distance = ($('input[name=distance]').val()) * 2;

    // console.log('temp: ' + desiredTemp);
    // console.log('weight: ' + gravity);
    // console.log('distance: ' + distance);

    if (desiredTemp === 'hot') {
      desiredTemp = 5;
    } else if (desiredTemp === 'warm') {
      desiredTemp = 4;
    } else if (desiredTemp === 'moderate') {
      desiredTemp = 3;
    } else if (desiredTemp === 'cold') {
      desiredTemp = 2;
    } else if (desiredTemp === 'frigid') {
      desiredTemp = 1;
    }
    let results = [];
    let tempScore = 0;

    // calculate temperature score
    planets.forEach(item => {
      // find difference between desired temp and actual temp
      tempScore = desiredTemp - item.temp;
      // some may go below 0, if this is the case flip the negative to a positive
      if (tempScore < 0) {
        tempScore *= -1;
      }
      // find inverse to calculate score
      tempScore = 5 - tempScore;
      results.push(tempScore);
      // console.log(`Name: ${item.name}, scoreb4grav: ${tempScore}`)
    })

    // calculate gravity score
    if (gravity === "bouncy") {
      planets.forEach((item, index) => {
        if (item.gravity < 0.5) { // less than 0.5 is five points
          // console.log(`Name: ${item.name}, scoreb4grav: ${results[index]}`)
          results[index] += 5;
          // console.log(item.name);
        } else if (item.gravity < 2) { // less than 2 is three points
          results[index] += 3;
        } else if (item.gravity < 5) { // less than 5 is one point
          results[index] += 1;
        }
      })
    } else if (gravity === "light") {
      planets.forEach((item, index) => {
        if (item.gravity > 0.5 && item.gravity < 1) { // between 0.5 and 1
          results[index] += 5;
        } else if (item.gravity < 0.5 || item.gravity < 3 ) { // less than 0.5 OR between 1 and 3
          results[index] += 3;
        } else if (item.gravity < 10) {
          results[index] += 1;
        }
      })
    } else if (gravity === "normal") {
      planets.forEach((item, index) => {
        if (item.gravity >= 1 && item.gravity < 2) { // between 1 and 2
          results[index] += 5;
        } else if ((item.gravity > 0.5 && item.gravity < 1) || item.gravity < 5) {
          results[index] += 3;
        } else if (item.gravity < 0.5 || item.gravity < 15) {
          results[index] += 1;
        }
      })
    } else if (gravity === "heavy") {
      planets.forEach((item, index) => {
        if (item.gravity > 2 && item.gravity < 10) {
          results[index] += 5;
        } else if ((item.gravity > 1 && item.gravity < 2) || item.gravity < 15) {
          results[index] += 3;
        } else if (item.gravity > 0.5) { // any gravity greater than 0.5
          results 
        }
      })
    } else if (gravity === "massive") {
      planets.forEach((item, index) => {
        if (item.gravity > 10) {
          results[index] += 5;
        } else if (item.gravity > 5) {
          results[index] += 3;
        } else if (item.gravity > 1) {
          results[index] += 1;
        }
      })
    }

    // travelArr to hold travelObject that all have two properties: index and travel value
    let travelArr = [];
    let travel = 0;

    // recall that the "planets" array holds travelDistance as a value of distance in billion/km
    // the below portion of code is used to calculate the time it would take 
    // to travel from earth to x planet travelling at 5% the speed of light, no de/acceleration
    planets.forEach((item, index) => {
      travel = item.travelDistance * 1000000000; 
      travel = travel / 14989.6229; // divide by km/s (5% the speed of light)
      travel = travel / 60; // convert to minutes
      travel = travel / 60; // convert to hours

      travelArr.push({
        index: index,
        travel: Math.round(travel)
      });
    });

    // comparing and sorting in order of travel time
    compare = (a, b) => {
      a = a.travel;
      b = b.travel;
      if (a < b) { // .sort method needs a return value of a negative number to know it's in place
        return -1;
      } else if (a > b) { // not in place yet
        return 1;
      } else { // same values
        return 0;
      }
    }
    travelArr.sort(compare);
    // console.log(distance);


    // calculate travel score
    // NOTE that the slider value can be up to 53, which is exactly half of pluto's travel distance
    // distance declaration above is * 2 so it = pluto's travel distance
    let targetAcquired = 0;

    // for loop to determine what planet (and the respective moons) lines up with the user's slider
    // the for loop is iterating through the travelArr and using .travel property on each planet
    for (let i = 0; i < travelArr.length; i++) {
      // if distance of body is equal to user's distance input add 5 points, this can happen multiple times in case of moons
      if (distance === travelArr[i].travel) {
        if (targetAcquired === 0) { // set value if we have not yet found a planet, made in mind for moons
          targetAcquired = i;
        }
        results[travelArr[i].index] += 5; 
        // travelArr[i].tempScore = 5;
      } else if (distance < travelArr[i].travel) { // as soon as user's input is smaller than the indexed
        if (targetAcquired === 0) { // run this if we have not yet found a planet
          results[travelArr[i - 1].index] += 5;
          // travelArr[i - 1].tempScore = 5;
          for (let k = i - 1; k >= 0; k--) { // this is specifically made for moons
            if (travelArr[k].travel === travelArr[k - 1].travel) {
              results[travelArr[k - 1].index] += 5;
              // travelArr[k - 1].tempScore = 5;
            } else {
              targetAcquired = k;
              break;
            }
          }
        }
        for (let l = i; l <= travelArr.length; l++) {
          if (travelArr[l + 1] && (travelArr[l].travel === travelArr[l + 1].travel)) {
            results[travelArr[l + 1].index] += 2;
            // travelArr[l + 1].tempScore = 2;
          } else {
            break;
          }
        }
        results[travelArr[i].index] += 2;
        // travelArr[i].tempScore = 2;
        break;
      }
    };

    results[travelArr[targetAcquired - 1].index] += 4;
    // travelArr[targetAcquired - 1].tempScore = 4;

    for (let j = targetAcquired - 1; j >= 0; j--) {
      results[travelArr[j].index] += 3;
      // travelArr[j].tempScore = 3;
    }

    // display results 
    let best = 0;
    let chosen = 0;
    results.forEach((item, index) => {
      if (item > best) {
        best = item;
        chosen = index;
      }
    })
    chosen = planets[chosen];
    const displayItem = `
      <h2>Dreamy?</h2>
      <div class="displayContainer">
          <div class="textContainer">
            <h3>Name: ${chosen.name}</h3>
            <p>Description: ${chosen.description}</p>
          </div>
          <img src="./assets/photos/${chosen.name}.jpg" alt="Photo of ${chosen.name}">
        </div>
    `
    $('.planet-output .wrapper').html(displayItem);
  
    // console.log(travelArr);
    // console.log(planets);
    // console.log(results);
  })
})