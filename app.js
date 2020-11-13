const solarApp = {};

const planets = {
  mercury: {    
    name: "Mercury",
    description: "Mercury is the smallest and innermost planet of the solar system. The temperature on the surface of Mercury can reach as hot as 425 C during the daytime and as low as -173 C at night.",
    temp: 4,
    gravity: 3.7,
    travelTime: 0.077
  },
  venus: {
    name: "Venus",
    description: "Venus is the second planet from the Sun. Cities floating on Venus's clouds is currently undergoing R&D.",
    temp: 5,
    travelTime: 0.042
  },
  earth: {
    name: "Earth",
    description: "Welcome to Earth! Original home to humans.",
    temp: 4,
    gravity: 1,
    travelTime: 0
  },
  mars: {
    name: "Mars",
    description: "Mars is now the second home to humans and is currently being terraformed.",
    temp: 3,
    gravity: 0.38,
    travelTime: 0.78340
  },
  jupiter: {
    name: "Jupiter",
    description: "Jupiter is an absolute unit, being the largest in the solar system. It has a mass of one-thousandth (1/1000) that of the sun, but two-and-a-half times that of all the other planets in the solar system combined.",
    temp: 2,
    gravity: 24.79,
    travelTime: 0.628730,
    source: "https://en.wikipedia.org/wiki/Jupiter"
  },
  saturn: {
    name: "Saturn",
    description: "Saturn is a gas giant and is the second largest planent in the solar system, following Jupiter. Saturn has an average density of only one-eighth the average density of Earth.",
    temp: 1,
    gravity: 10.44,
    travelTime: 1.275
  },
  uranus: {
    name: "Uranus",
    description: "Uranus is the third largest planet of the solar system. It is often referred to as an 'ice giant' planet. Uranus hits the coldest temperatures of any planet.",
    temp: 1,
    gravity: 8.87,
    travelTime: 2.723950,
    source: "https://space-facts.com/uranus/"
  },
  neptune: {
    name: "Neptune",
    description: "Neptune is the last planet within the solar system. It is 17 times the mass of Earth and is the densest giant planet.",
    temp: 1,
    gravity: 11.15,
    travelTime: 4.3514
  },
  pluto: {
    name: "Pluto",
    description: "Pluto is a dwarf planet found within the Kuiper belt, a ring of bodies beyond the orbit of Neptune. Pluto was the first and largest Kuiper belt object to be discovered in 1930. In 2006 it was demoted to the life of a dwarf planet.",
    temp: 1,
    gravity: 0.62,
    travelTime: 5.1794,
    source: "https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/in-depth/"
  },
  europa: {
    name: "Europa",
    description: "Europa is a moon in orbit of Jupiter. It is the sixth-closest to the planet out of all the 79 moons of Jupiter. Europa has a possibility of harboring life in its under-ice ocean, perhaps in an evironment closely resembling Earth's deep-ocean hydrothermal vents.",
    temp: 2,
    gravity: 1.315,
    travelTime: 0.6283
  },
  titan: {
    name: "Titan",
    description: "Titan is the largest moon of Saturn. Titan is the only moon in the solar system to have a dense atmosphere. It is also the only known celestial body, aside from Earth, to have evidence of stable bodies of surface liquid.",
    temp: 1,
    gravity: 1.352,
    travelTime: 1.5485
  },
  ganymede: {
    name: "Ganymede",
    description: "Ganymede is a moon of Jupiter. It is the largest and most massive of the solar system's moons. It is also the only moon within the solar system to have a magnetosphere.",
    temp: 1,
    gravity: 1.428,
    travelTime: 0.6283
  },
  enceladus: {
    name: "Enceladus",
    description: "Enceladus is the sixth-largest moon of Saturn. It is about 500 kilometers in diameter. Ever since Enceladus was seen shooting plumes of water vapor and ice from cracks in it's frozen crust more than a decade ago scientists have been pondering the possibility of life deep within it's oceans.",
    temp: 1,
    gravity: 0.113,
    travelTime: 1.272,
    source: "https://www.latimes.com/science/sciencenow/la-sci-sn-cassini-saturn-enceladus-20170413-story.html"
  },
  io: {
    name: "Io",
    description: "Io is the third-largest of the four Galilean moons of planet Jupiter. It has the highest density for a moon in the solar system, yet is only the fourth-largest.",
    temp: 3,
    gravity: 1.796,
    travelTime: 24.79
  }
}

