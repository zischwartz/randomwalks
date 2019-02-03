// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/corpora/data/humans/occupations.json":[function(require,module,exports) {
module.exports = {
	"description": "A list of occupations (jobs that people might have).",
	"occupations":
	[
		"accountant",
		"actor",
		"actuary",
		"adhesive bonding machine tender",
		"adjudicator",
		"administrative assistant",
		"administrative services manager",
		"adult education teacher",
		"advertising manager",
		"advertising sales agent",
		"aerobics instructor",
		"aerospace engineer",
		"aerospace engineering technician",
		"agent",
		"agricultural engineer",
		"agricultural equipment operator",
		"agricultural grader",
		"agricultural inspector",
		"agricultural manager",
		"agricultural sciences teacher",
		"agricultural sorter",
		"agricultural technician",
		"agricultural worker",
		"air conditioning installer",
		"air conditioning mechanic",
		"air traffic controller",
		"aircraft cargo handling supervisor",
		"aircraft mechanic",
		"aircraft service technician",
		"airline copilot",
		"airline pilot",
		"ambulance dispatcher",
		"ambulance driver",
		"amusement machine servicer",
		"anesthesiologist",
		"animal breeder",
		"animal control worker",
		"animal scientist",
		"animal trainer",
		"animator",
		"answering service operator",
		"anthropologist",
		"apparel patternmaker",
		"apparel worker",
		"arbitrator",
		"archeologist",
		"architect",
		"architectural drafter",
		"architectural manager",
		"archivist",
		"art director",
		"art teacher",
		"artist",
		"assembler",
		"astronomer",
		"athlete",
		"athletic trainer",
		"ATM machine repairer",
		"atmospheric scientist",
		"attendant",
		"audio and video equipment technician",
		"audio-visual and multimedia collections specialist",
		"audiologist",
		"auditor",
		"author",
		"auto damage insurance appraiser",
		"automotive and watercraft service attendant",
		"automotive glass installer",
		"automotive mechanic",
		"avionics technician",
		"baggage porter",
		"bailiff",
		"baker",
		"barback",
		"barber",
		"bartender",
		"basic education teacher",
		"behavioral disorder counselor",
		"bellhop",
		"bench carpenter",
		"bicycle repairer",
		"bill and account collector",
		"billing and posting clerk",
		"biochemist",
		"biological technician",
		"biomedical engineer",
		"biophysicist",
		"blaster",
		"blending machine operator",
		"blockmason",
		"boiler operator",
		"boilermaker",
		"bookkeeper",
		"boring machine tool tender",
		"brazer",
		"brickmason",
		"bridge and lock tender",
		"broadcast news analyst",
		"broadcast technician",
		"brokerage clerk",
		"budget analyst",
		"building inspector",
		"bus mechanic",
		"butcher",
		"buyer",
		"cabinetmaker",
		"cafeteria attendant",
		"cafeteria cook",
		"camera operator",
		"camera repairer",
		"cardiovascular technician",
		"cargo agent",
		"carpenter",
		"carpet installer",
		"cartographer",
		"cashier",
		"caster",
		"ceiling tile installer",
		"cellular equipment installer",
		"cement mason",
		"channeling machine operator",
		"chauffeur",
		"checker",
		"chef",
		"chemical engineer",
		"chemical plant operator",
		"chemist",
		"chemistry teacher",
		"chief executive",
		"child social worker",
		"childcare worker",
		"chiropractor",
		"choreographer",
		"civil drafter",
		"civil engineer",
		"civil engineering technician",
		"claims adjuster",
		"claims examiner",
		"claims investigator",
		"cleaner",
		"clinical laboratory technician",
		"clinical laboratory technologist",
		"clinical psychologist",
		"coating worker",
		"coatroom attendant",
		"coil finisher",
		"coil taper",
		"coil winder",
		"coin machine servicer",
		"commercial diver",
		"commercial pilot",
		"commodities sales agent",
		"communications equipment operator",
		"communications teacher",
		"community association manager",
		"community service manager",
		"compensation and benefits manager",
		"compliance officer",
		"composer",
		"computer hardware engineer",
		"computer network architect",
		"computer operator",
		"computer programmer",
		"computer science teacher",
		"computer support specialist",
		"computer systems administrator",
		"computer systems analyst",
		"concierge",
		"conciliator",
		"concrete finisher",
		"conservation science teacher",
		"conservation scientist",
		"conservation worker",
		"conservator",
		"construction inspector",
		"construction manager",
		"construction painter",
		"construction worker",
		"continuous mining machine operator",
		"convention planner",
		"conveyor operator",
		"cook",
		"cooling equipment operator",
		"copy marker",
		"correctional officer",
		"correctional treatment specialist",
		"correspondence clerk",
		"correspondent",
		"cosmetologist",
		"cost estimator",
		"costume attendant",
		"counseling psychologist",
		"counselor",
		"courier",
		"court reporter",
		"craft artist",
		"crane operator",
		"credit analyst",
		"credit checker",
		"credit counselor",
		"criminal investigator",
		"criminal justice teacher",
		"crossing guard",
		"curator",
		"custom sewer",
		"customer service representative",
		"cutter",
		"cutting machine operator",
		"dancer",
		"data entry keyer",
		"database administrator",
		"decorating worker",
		"delivery services driver",
		"demonstrator",
		"dental assistant",
		"dental hygienist",
		"dental laboratory technician",
		"dentist",
		"derrick operator",
		"designer",
		"desktop publisher",
		"detective",
		"diagnostic medical sonographer",
		"die maker",
		"diesel engine specialist",
		"dietetic technician",
		"dietitian",
		"dinkey operator",
		"director",
		"dishwasher",
		"dispatcher",
		"door-to-door sales worker",
		"drafter",
		"dragline operator",
		"drama teacher",
		"dredge operator",
		"dressing room attendant",
		"dressmaker",
		"drier operator",
		"drilling machine tool operator",
		"dry-cleaning worker",
		"drywall installer",
		"dyeing machine operator",
		"earth driller",
		"economics teacher",
		"economist",
		"editor",
		"education administrator",
		"electric motor repairer",
		"electrical electronics drafter",
		"electrical engineer",
		"electrical equipment assembler",
		"electrical installer",
		"electrical power-line installer",
		"electrician",
		"electro-mechanical technician",
		"elementary school teacher",
		"elevator installer",
		"elevator repairer",
		"embalmer",
		"emergency management director",
		"emergency medical technician",
		"engine assembler",
		"engineer",
		"engineering manager",
		"engineering teacher",
		"english language teacher",
		"engraver",
		"entertainment attendant",
		"environmental engineer",
		"environmental science teacher",
		"environmental scientist",
		"epidemiologist",
		"escort",
		"etcher",
		"event planner",
		"excavating operator",
		"executive administrative assistant",
		"executive secretary",
		"exhibit designer",
		"expediting clerk",
		"explosives worker",
		"extraction worker",
		"fabric mender",
		"fabric patternmaker",
		"fabricator",
		"faller",
		"family practitioner",
		"family social worker",
		"family therapist",
		"farm advisor",
		"farm equipment mechanic",
		"farm labor contractor",
		"farmer",
		"farmworker",
		"fashion designer",
		"fast food cook",
		"fence erector",
		"fiberglass fabricator",
		"fiberglass laminator",
		"file clerk",
		"filling machine operator",
		"film and video editor",
		"financial analyst",
		"financial examiner",
		"financial manager",
		"financial services sales agent",
		"fine artist",
		"fire alarm system installer",
		"fire dispatcher",
		"fire inspector",
		"fire investigator",
		"firefighter",
		"fish and game warden",
		"fish cutter",
		"fish trimmer",
		"fisher",
		"fitness studies teacher",
		"fitness trainer",
		"flight attendant",
		"floor finisher",
		"floor layer",
		"floor sander",
		"floral designer",
		"food batchmaker",
		"food cooking machine operator",
		"food preparation worker",
		"food science technician",
		"food scientist",
		"food server",
		"food service manager",
		"food technologist",
		"foreign language teacher",
		"foreign literature teacher",
		"forensic science technician",
		"forest fire inspector",
		"forest fire prevention specialist",
		"forest worker",
		"forester",
		"forestry teacher",
		"forging machine setter",
		"foundry coremaker",
		"freight agent",
		"freight mover",
		"fundraising manager",
		"funeral attendant",
		"funeral director",
		"funeral service manager",
		"furnace operator",
		"furnishings worker",
		"furniture finisher",
		"gaming booth cashier",
		"gaming cage worker",
		"gaming change person",
		"gaming dealer",
		"gaming investigator",
		"gaming manager",
		"gaming surveillance officer",
		"garment mender",
		"garment presser",
		"gas compressor",
		"gas plant operator",
		"gas pumping station operator",
		"general manager",
		"general practitioner",
		"geographer",
		"geography teacher",
		"geological engineer",
		"geological technician",
		"geoscientist",
		"glazier",
		"government program eligibility interviewer",
		"graduate teaching assistant",
		"graphic designer",
		"groundskeeper",
		"groundskeeping worker",
		"gynecologist",
		"hairdresser",
		"hairstylist",
		"hand grinding worker",
		"hand laborer",
		"hand packager",
		"hand packer",
		"hand polishing worker",
		"hand sewer",
		"hazardous materials removal worker",
		"head cook",
		"health and safety engineer",
		"health educator",
		"health information technician",
		"health services manager",
		"health specialties teacher",
		"healthcare social worker",
		"hearing officer",
		"heat treating equipment setter",
		"heating installer",
		"heating mechanic",
		"heavy truck driver",
		"highway maintenance worker",
		"historian",
		"history teacher",
		"hoist and winch operator",
		"home appliance repairer",
		"home economics teacher",
		"home entertainment installer",
		"home health aide",
		"home management advisor",
		"host",
		"hostess",
		"hostler",
		"hotel desk clerk",
		"housekeeping cleaner",
		"human resources assistant",
		"human resources manager",
		"human service assistant",
		"hunter",
		"hydrologist",
		"illustrator",
		"industrial designer",
		"industrial engineer",
		"industrial engineering technician",
		"industrial machinery mechanic",
		"industrial production manager",
		"industrial truck operator",
		"industrial-organizational psychologist",
		"information clerk",
		"information research scientist",
		"information security analyst",
		"information systems manager",
		"inspector",
		"instructional coordinator",
		"instructor",
		"insulation worker",
		"insurance claims clerk",
		"insurance sales agent",
		"insurance underwriter",
		"intercity bus driver",
		"interior designer",
		"internist",
		"interpreter",
		"interviewer",
		"investigator",
		"jailer",
		"janitor",
		"jeweler",
		"judge",
		"judicial law clerk",
		"kettle operator",
		"kiln operator",
		"kindergarten teacher",
		"laboratory animal caretaker",
		"landscape architect",
		"landscaping worker",
		"lathe setter",
		"laundry worker",
		"law enforcement teacher",
		"law teacher",
		"lawyer",
		"layout worker",
		"leather worker",
		"legal assistant",
		"legal secretary",
		"legislator",
		"librarian",
		"library assistant",
		"library science teacher",
		"library technician",
		"licensed practical nurse",
		"licensed vocational nurse",
		"life scientist",
		"lifeguard",
		"light truck driver",
		"line installer",
		"literacy teacher",
		"literature teacher",
		"loading machine operator",
		"loan clerk",
		"loan interviewer",
		"loan officer",
		"lobby attendant",
		"locker room attendant",
		"locksmith",
		"locomotive engineer",
		"locomotive firer",
		"lodging manager",
		"log grader",
		"logging equipment operator",
		"logistician",
		"machine feeder",
		"machinist",
		"magistrate judge",
		"magistrate",
		"maid",
		"mail clerk",
		"mail machine operator",
		"mail superintendent",
		"maintenance painter",
		"maintenance worker",
		"makeup artist",
		"management analyst",
		"manicurist",
		"manufactured building installer",
		"mapping technician",
		"marble setter",
		"marine engineer",
		"marine oiler",
		"market research analyst",
		"marketing manager",
		"marketing specialist",
		"marriage therapist",
		"massage therapist",
		"material mover",
		"materials engineer",
		"materials scientist",
		"mathematical science teacher",
		"mathematical technician",
		"mathematician",
		"maxillofacial surgeon",
		"measurer",
		"meat cutter",
		"meat packer",
		"meat trimmer",
		"mechanical door repairer",
		"mechanical drafter",
		"mechanical engineer",
		"mechanical engineering technician",
		"mediator",
		"medical appliance technician",
		"medical assistant",
		"medical equipment preparer",
		"medical equipment repairer",
		"medical laboratory technician",
		"medical laboratory technologist",
		"medical records technician",
		"medical scientist",
		"medical secretary",
		"medical services manager",
		"medical transcriptionist",
		"meeting planner",
		"mental health counselor",
		"mental health social worker",
		"merchandise displayer",
		"messenger",
		"metal caster",
		"metal patternmaker",
		"metal pickling operator",
		"metal pourer",
		"metal worker",
		"metal-refining furnace operator",
		"metal-refining furnace tender",
		"meter reader",
		"microbiologist",
		"middle school teacher",
		"milling machine setter",
		"millwright",
		"mine cutting machine operator",
		"mine shuttle car operator",
		"mining engineer",
		"mining safety engineer",
		"mining safety inspector",
		"mining service unit operator",
		"mixing machine setter",
		"mobile heavy equipment mechanic",
		"mobile home installer",
		"model maker",
		"model",
		"molder",
		"mortician",
		"motel desk clerk",
		"motion picture projectionist",
		"motorboat mechanic",
		"motorboat operator",
		"motorboat service technician",
		"motorcycle mechanic",
		"multimedia artist",
		"museum technician",
		"music director",
		"music teacher",
		"musical instrument repairer",
		"musician",
		"natural sciences manager",
		"naval architect",
		"network systems administrator",
		"new accounts clerk",
		"news vendor",
		"nonfarm animal caretaker",
		"nuclear engineer",
		"nuclear medicine technologist",
		"nuclear power reactor operator",
		"nuclear technician",
		"nursing aide",
		"nursing instructor",
		"nursing teacher",
		"nutritionist",
		"obstetrician",
		"occupational health and safety specialist",
		"occupational health and safety technician",
		"occupational therapist",
		"occupational therapy aide",
		"occupational therapy assistant",
		"offbearer",
		"office clerk",
		"office machine operator",
		"operating engineer",
		"operations manager",
		"operations research analyst",
		"ophthalmic laboratory technician",
		"optician",
		"optometrist",
		"oral surgeon",
		"order clerk",
		"order filler",
		"orderly",
		"ordnance handling expert",
		"orthodontist",
		"orthotist",
		"outdoor power equipment mechanic",
		"oven operator",
		"packaging machine operator",
		"painter ",
		"painting worker",
		"paper goods machine setter",
		"paperhanger",
		"paralegal",
		"paramedic",
		"parking enforcement worker",
		"parking lot attendant",
		"parts salesperson",
		"paving equipment operator",
		"payroll clerk",
		"pediatrician",
		"pedicurist",
		"personal care aide",
		"personal chef",
		"personal financial advisor",
		"pest control worker",
		"pesticide applicator",
		"pesticide handler",
		"pesticide sprayer",
		"petroleum engineer",
		"petroleum gauger",
		"petroleum pump system operator",
		"petroleum refinery operator",
		"petroleum technician",
		"pharmacist",
		"pharmacy aide",
		"pharmacy technician",
		"philosophy teacher",
		"photogrammetrist",
		"photographer",
		"photographic process worker",
		"photographic processing machine operator",
		"physical therapist aide",
		"physical therapist assistant",
		"physical therapist",
		"physician assistant",
		"physician",
		"physicist",
		"physics teacher",
		"pile-driver operator",
		"pipefitter",
		"pipelayer",
		"planing machine operator",
		"planning clerk",
		"plant operator",
		"plant scientist",
		"plasterer",
		"plastic patternmaker",
		"plastic worker",
		"plumber",
		"podiatrist",
		"police dispatcher",
		"police officer",
		"policy processing clerk",
		"political science teacher",
		"political scientist",
		"postal service clerk",
		"postal service mail carrier",
		"postal service mail processing machine operator",
		"postal service mail processor",
		"postal service mail sorter",
		"postmaster",
		"postsecondary teacher",
		"poultry cutter",
		"poultry trimmer",
		"power dispatcher",
		"power distributor",
		"power plant operator",
		"power tool repairer",
		"precious stone worker",
		"precision instrument repairer",
		"prepress technician",
		"preschool teacher",
		"priest",
		"print binding worker",
		"printing press operator",
		"private detective",
		"probation officer",
		"procurement clerk",
		"producer",
		"product promoter",
		"production clerk",
		"production occupation",
		"proofreader",
		"property manager",
		"prosthetist",
		"prosthodontist",
		"psychiatric aide",
		"psychiatric technician",
		"psychiatrist",
		"psychologist",
		"psychology teacher",
		"public relations manager",
		"public relations specialist",
		"pump operator",
		"purchasing agent",
		"purchasing manager",
		"radiation therapist",
		"radio announcer",
		"radio equipment installer",
		"radio operator",
		"radiologic technician",
		"radiologic technologist",
		"rail car repairer",
		"rail transportation worker",
		"rail yard engineer",
		"rail-track laying equipment operator",
		"railroad brake operator",
		"railroad conductor",
		"railroad police",
		"rancher",
		"real estate appraiser",
		"real estate broker",
		"real estate manager",
		"real estate sales agent",
		"receiving clerk",
		"receptionist",
		"record clerk",
		"recreation teacher",
		"recreation worker",
		"recreational therapist",
		"recreational vehicle service technician",
		"recyclable material collector",
		"referee",
		"refractory materials repairer",
		"refrigeration installer",
		"refrigeration mechanic",
		"refuse collector",
		"regional planner",
		"registered nurse",
		"rehabilitation counselor",
		"reinforcing iron worker",
		"reinforcing rebar worker",
		"religion teacher",
		"religious activities director",
		"religious worker",
		"rental clerk",
		"repair worker",
		"reporter",
		"residential advisor",
		"resort desk clerk",
		"respiratory therapist",
		"respiratory therapy technician",
		"retail buyer",
		"retail salesperson",
		"revenue agent",
		"rigger",
		"rock splitter",
		"rolling machine tender",
		"roof bolter",
		"roofer",
		"rotary drill operator",
		"roustabout",
		"safe repairer",
		"sailor",
		"sales engineer",
		"sales manager",
		"sales representative",
		"sampler",
		"sawing machine operator",
		"scaler",
		"school bus driver",
		"school psychologist",
		"school social worker",
		"scout leader",
		"sculptor",
		"secondary education teacher",
		"secondary school teacher",
		"secretary",
		"securities sales agent",
		"security guard",
		"security system installer",
		"segmental paver",
		"self-enrichment education teacher",
		"semiconductor processor",
		"septic tank servicer",
		"set designer",
		"sewer pipe cleaner",
		"sewing machine operator",
		"shampooer",
		"shaper",
		"sheet metal worker",
		"sheriff's patrol officer",
		"ship captain",
		"ship engineer",
		"ship loader",
		"shipmate",
		"shipping clerk",
		"shoe machine operator",
		"shoe worker",
		"short order cook",
		"signal operator",
		"signal repairer",
		"singer",
		"ski patrol",
		"skincare specialist",
		"slaughterer",
		"slicing machine tender",
		"slot supervisor",
		"social science research assistant",
		"social sciences teacher",
		"social scientist",
		"social service assistant",
		"social service manager",
		"social work teacher",
		"social worker",
		"sociologist",
		"sociology teacher",
		"software developer",
		"software engineer",
		"soil scientist",
		"solderer",
		"sorter",
		"sound engineering technician",
		"space scientist",
		"special education teacher",
		"speech-language pathologist",
		"sports book runner",
		"sports entertainer",
		"sports performer",
		"stationary engineer",
		"statistical assistant",
		"statistician",
		"steamfitter",
		"stock clerk",
		"stock mover",
		"stonemason",
		"street vendor",
		"streetcar operator",
		"structural iron worker",
		"structural metal fabricator",
		"structural metal fitter",
		"structural steel worker",
		"stucco mason",
		"substance abuse counselor",
		"substance abuse social worker",
		"subway operator",
		"surfacing equipment operator",
		"surgeon",
		"surgical technologist",
		"survey researcher",
		"surveying technician",
		"surveyor",
		"switch operator",
		"switchboard operator",
		"tailor",
		"tamping equipment operator",
		"tank car loader",
		"taper",
		"tax collector",
		"tax examiner",
		"tax preparer",
		"taxi driver",
		"teacher assistant",
		"teacher",
		"team assembler",
		"technical writer",
		"telecommunications equipment installer",
		"telemarketer",
		"telephone operator",
		"television announcer",
		"teller",
		"terrazzo finisher",
		"terrazzo worker",
		"tester",
		"textile bleaching operator",
		"textile cutting machine setter",
		"textile knitting machine setter",
		"textile presser",
		"textile worker",
		"therapist",
		"ticket agent",
		"ticket taker",
		"tile setter",
		"timekeeping clerk",
		"timing device assembler",
		"tire builder",
		"tire changer",
		"tire repairer",
		"title abstractor",
		"title examiner",
		"title searcher",
		"tobacco roasting machine operator",
		"tool filer",
		"tool grinder",
		"tool maker",
		"tool sharpener",
		"tour guide",
		"tower equipment installer",
		"tower operator",
		"track switch repairer",
		"tractor operator",
		"tractor-trailer truck driver",
		"traffic clerk",
		"traffic technician",
		"training and development manager",
		"training and development specialist",
		"transit police",
		"translator",
		"transportation equipment painter",
		"transportation inspector",
		"transportation security screener",
		"transportation worker",
		"trapper",
		"travel agent",
		"travel clerk",
		"travel guide",
		"tree pruner",
		"tree trimmer",
		"trimmer",
		"truck loader",
		"truck mechanic",
		"tuner",
		"turning machine tool operator",
		"typist",
		"umpire",
		"undertaker",
		"upholsterer",
		"urban planner",
		"usher",
		"valve installer",
		"vending machine servicer",
		"veterinarian",
		"veterinary assistant",
		"veterinary technician",
		"vocational counselor",
		"vocational education teacher",
		"waiter",
		"waitress",
		"watch repairer",
		"water treatment plant operator",
		"weaving machine setter",
		"web developer",
		"weigher",
		"welder",
		"wellhead pumper",
		"wholesale buyer",
		"wildlife biologist",
		"window trimmer",
		"wood patternmaker",
		"woodworker",
		"word processor",
		"writer",
		"yardmaster",
		"zoologist"
	]
}
;
},{}],"node_modules/corpora/data/words/verbs.json":[function(require,module,exports) {
module.exports = {
    "description": "A list of English verbs.",
    "verbs": [
        {
            "present": "accept",
            "past": "accepted"
        },
        {
            "present": "add",
            "past": "added"
        },
        {
            "present": "admire",
            "past": "admired"
        },
        {
            "present": "admit",
            "past": "admitted"
        },
        {
            "present": "advise",
            "past": "advised"
        },
        {
            "present": "afford",
            "past": "afforded"
        },
        {
            "present": "agree",
            "past": "agreed"
        },
        {
            "present": "alert",
            "past": "alerted"
        },
        {
            "present": "allow",
            "past": "allowed"
        },
        {
            "present": "amuse",
            "past": "amused"
        },
        {
            "present": "analyse",
            "past": "analysed"
        },
        {
            "present": "announce",
            "past": "announced"
        },
        {
            "present": "annoy",
            "past": "annoyed"
        },
        {
            "present": "answer",
            "past": "answered"
        },
        {
            "present": "apologise",
            "past": "apologised"
        },
        {
            "present": "appear",
            "past": "appeared"
        },
        {
            "present": "applaud",
            "past": "applauded"
        },
        {
            "present": "appreciate",
            "past": "appreciated"
        },
        {
            "present": "approve",
            "past": "approved"
        },
        {
            "present": "argue",
            "past": "argued"
        },
        {
            "present": "arrange",
            "past": "arranged"
        },
        {
            "present": "arrest",
            "past": "arrested"
        },
        {
            "present": "arrive",
            "past": "arrived"
        },
        {
            "present": "ask",
            "past": "asked"
        },
        {
            "present": "attach",
            "past": "attached"
        },
        {
            "present": "attack",
            "past": "attacked"
        },
        {
            "present": "attempt",
            "past": "attempted"
        },
        {
            "present": "attend",
            "past": "attended"
        },
        {
            "present": "attract",
            "past": "attracted"
        },
        {
            "present": "avoid",
            "past": "avoided"
        },
        {
            "present": "back",
            "past": "backed"
        },
        {
            "present": "bake",
            "past": "baked"
        },
        {
            "present": "balance",
            "past": "balanced"
        },
        {
            "present": "ban",
            "past": "banned"
        },
        {
            "present": "bang",
            "past": "banged"
        },
        {
            "present": "bare",
            "past": "bared"
        },
        {
            "present": "bat",
            "past": "batted"
        },
        {
            "present": "bathe",
            "past": "bathed"
        },
        {
            "present": "battle",
            "past": "battled"
        },
        {
            "present": "beam",
            "past": "beamed"
        },
        {
            "present": "beg",
            "past": "begged"
        },
        {
            "present": "behave",
            "past": "behaved"
        },
        {
            "present": "belong",
            "past": "belonged"
        },
        {
            "present": "bleach",
            "past": "bleached"
        },
        {
            "present": "bless",
            "past": "blessed"
        },
        {
            "present": "blind",
            "past": "blinded"
        },
        {
            "present": "blink",
            "past": "blinked"
        },
        {
            "present": "blot",
            "past": "blotted"
        },
        {
            "present": "blush",
            "past": "blushed"
        },
        {
            "present": "boast",
            "past": "boasted"
        },
        {
            "present": "boil",
            "past": "boiled"
        },
        {
            "present": "bolt",
            "past": "bolted"
        },
        {
            "present": "bomb",
            "past": "bombed"
        },
        {
            "present": "book",
            "past": "booked"
        },
        {
            "present": "bore",
            "past": "bored"
        },
        {
            "present": "borrow",
            "past": "borrowed"
        },
        {
            "present": "bounce",
            "past": "bounced"
        },
        {
            "present": "bow",
            "past": "bowed"
        },
        {
            "present": "box",
            "past": "boxed"
        },
        {
            "present": "brake",
            "past": "braked"
        },
        {
            "present": "branch",
            "past": "branched"
        },
        {
            "present": "breathe",
            "past": "breathed"
        },
        {
            "present": "bruise",
            "past": "bruised"
        },
        {
            "present": "brush",
            "past": "brushed"
        },
        {
            "present": "bubble",
            "past": "bubbled"
        },
        {
            "present": "bump",
            "past": "bumped"
        },
        {
            "present": "burn",
            "past": "burned"
        },
        {
            "present": "bury",
            "past": "buried"
        },
        {
            "present": "buzz",
            "past": "buzzed"
        },
        {
            "present": "calculate",
            "past": "calculated"
        },
        {
            "present": "call",
            "past": "called"
        },
        {
            "present": "camp",
            "past": "camped"
        },
        {
            "present": "care",
            "past": "cared"
        },
        {
            "present": "carry",
            "past": "carried"
        },
        {
            "present": "carve",
            "past": "carved"
        },
        {
            "present": "cause",
            "past": "caused"
        },
        {
            "present": "challenge",
            "past": "challenged"
        },
        {
            "present": "change",
            "past": "changed"
        },
        {
            "present": "charge",
            "past": "charged"
        },
        {
            "present": "chase",
            "past": "chased"
        },
        {
            "present": "cheat",
            "past": "cheated"
        },
        {
            "present": "check",
            "past": "checked"
        },
        {
            "present": "cheer",
            "past": "cheered"
        },
        {
            "present": "chew",
            "past": "chewed"
        },
        {
            "present": "choke",
            "past": "choked"
        },
        {
            "present": "chop",
            "past": "chopped"
        },
        {
            "present": "claim",
            "past": "claimed"
        },
        {
            "present": "clap",
            "past": "clapped"
        },
        {
            "present": "clean",
            "past": "cleaned"
        },
        {
            "present": "clear",
            "past": "cleared"
        },
        {
            "present": "clip",
            "past": "clipped"
        },
        {
            "present": "close",
            "past": "closed"
        },
        {
            "present": "coach",
            "past": "coached"
        },
        {
            "present": "coil",
            "past": "coiled"
        },
        {
            "present": "collect",
            "past": "collected"
        },
        {
            "present": "colour",
            "past": "coloured"
        },
        {
            "present": "comb",
            "past": "combed"
        },
        {
            "present": "command",
            "past": "commanded"
        },
        {
            "present": "communicate",
            "past": "communicated"
        },
        {
            "present": "compare",
            "past": "compared"
        },
        {
            "present": "compete",
            "past": "competed"
        },
        {
            "present": "complain",
            "past": "complained"
        },
        {
            "present": "complete",
            "past": "completed"
        },
        {
            "present": "concentrate",
            "past": "concentrated"
        },
        {
            "present": "concern",
            "past": "concerned"
        },
        {
            "present": "confess",
            "past": "confessed"
        },
        {
            "present": "confuse",
            "past": "confused"
        },
        {
            "present": "connect",
            "past": "connected"
        },
        {
            "present": "consider",
            "past": "considered"
        },
        {
            "present": "consist",
            "past": "consisted"
        },
        {
            "present": "contain",
            "past": "contained"
        },
        {
            "present": "continue",
            "past": "continued"
        },
        {
            "present": "copy",
            "past": "copied"
        },
        {
            "present": "correct",
            "past": "corrected"
        },
        {
            "present": "cough",
            "past": "coughed"
        },
        {
            "present": "count",
            "past": "counted"
        },
        {
            "present": "cover",
            "past": "covered"
        },
        {
            "present": "crack",
            "past": "cracked"
        },
        {
            "present": "crash",
            "past": "crashed"
        },
        {
            "present": "crawl",
            "past": "crawled"
        },
        {
            "present": "cross",
            "past": "crossed"
        },
        {
            "present": "crush",
            "past": "crushed"
        },
        {
            "present": "cry",
            "past": "cried"
        },
        {
            "present": "cure",
            "past": "cured"
        },
        {
            "present": "curl",
            "past": "curled"
        },
        {
            "present": "curve",
            "past": "curved"
        },
        {
            "present": "cycle",
            "past": "cycled"
        },
        {
            "present": "dam",
            "past": "dammed"
        },
        {
            "present": "damage",
            "past": "damaged"
        },
        {
            "present": "dance",
            "past": "danced"
        },
        {
            "present": "dare",
            "past": "dared"
        },
        {
            "present": "decay",
            "past": "decayed"
        },
        {
            "present": "deceive",
            "past": "deceived"
        },
        {
            "present": "decide",
            "past": "decided"
        },
        {
            "present": "decorate",
            "past": "decorated"
        },
        {
            "present": "delay",
            "past": "delayed"
        },
        {
            "present": "delight",
            "past": "delighted"
        },
        {
            "present": "deliver",
            "past": "delivered"
        },
        {
            "present": "depend",
            "past": "depended"
        },
        {
            "present": "describe",
            "past": "described"
        },
        {
            "present": "desert",
            "past": "deserted"
        },
        {
            "present": "deserve",
            "past": "deserved"
        },
        {
            "present": "destroy",
            "past": "destroyed"
        },
        {
            "present": "detect",
            "past": "detected"
        },
        {
            "present": "develop",
            "past": "developed"
        },
        {
            "present": "disagree",
            "past": "disagreed"
        },
        {
            "present": "disappear",
            "past": "disappeared"
        },
        {
            "present": "disapprove",
            "past": "disapproved"
        },
        {
            "present": "disarm",
            "past": "disarmed"
        },
        {
            "present": "discover",
            "past": "discovered"
        },
        {
            "present": "dislike",
            "past": "disliked"
        },
        {
            "present": "divide",
            "past": "divided"
        },
        {
            "present": "double",
            "past": "doubled"
        },
        {
            "present": "doubt",
            "past": "doubted"
        },
        {
            "present": "drag",
            "past": "dragged"
        },
        {
            "present": "drain",
            "past": "drained"
        },
        {
            "present": "dream",
            "past": "dreamed"
        },
        {
            "present": "dress",
            "past": "dressed"
        },
        {
            "present": "drip",
            "past": "dripped"
        },
        {
            "present": "drop",
            "past": "dropped"
        },
        {
            "present": "drown",
            "past": "drowned"
        },
        {
            "present": "drum",
            "past": "drummed"
        },
        {
            "present": "dry",
            "past": "dried"
        },
        {
            "present": "dust",
            "past": "dusted"
        },
        {
            "present": "earn",
            "past": "earned"
        },
        {
            "present": "educate",
            "past": "educated"
        },
        {
            "present": "embarrass",
            "past": "embarrassed"
        },
        {
            "present": "employ",
            "past": "employed"
        },
        {
            "present": "empty",
            "past": "emptied"
        },
        {
            "present": "encourage",
            "past": "encouraged"
        },
        {
            "present": "end",
            "past": "ended"
        },
        {
            "present": "enjoy",
            "past": "enjoyed"
        },
        {
            "present": "enter",
            "past": "entered"
        },
        {
            "present": "entertain",
            "past": "entertained"
        },
        {
            "present": "escape",
            "past": "escaped"
        },
        {
            "present": "examine",
            "past": "examined"
        },
        {
            "present": "excite",
            "past": "excited"
        },
        {
            "present": "excuse",
            "past": "excused"
        },
        {
            "present": "exercise",
            "past": "exercised"
        },
        {
            "present": "exist",
            "past": "existed"
        },
        {
            "present": "expand",
            "past": "expand"
        },
        {
            "present": "expect",
            "past": "expected"
        },
        {
            "present": "explain",
            "past": "explained"
        },
        {
            "present": "explode",
            "past": "exploded"
        },
        {
            "present": "extend",
            "past": "extended"
        },
        {
            "present": "face",
            "past": "faced"
        },
        {
            "present": "fade",
            "past": "faded"
        },
        {
            "present": "fail",
            "past": "failed"
        },
        {
            "present": "fancy",
            "past": "fancied"
        },
        {
            "present": "fasten",
            "past": "fastened"
        },
        {
            "present": "fax",
            "past": "faxed"
        },
        {
            "present": "fear",
            "past": "feared"
        },
        {
            "present": "fence",
            "past": "fenced"
        },
        {
            "present": "fetch",
            "past": "fetched"
        },
        {
            "present": "file",
            "past": "filed"
        },
        {
            "present": "fill",
            "past": "filled"
        },
        {
            "present": "film",
            "past": "filmed"
        },
        {
            "present": "fire",
            "past": "fired"
        },
        {
            "present": "fit",
            "past": "fitted"
        },
        {
            "present": "fix",
            "past": "fixed"
        },
        {
            "present": "flap",
            "past": "flapped"
        },
        {
            "present": "flash",
            "past": "flashed"
        },
        {
            "present": "float",
            "past": "floated"
        },
        {
            "present": "flood",
            "past": "flooded"
        },
        {
            "present": "flow",
            "past": "flowed"
        },
        {
            "present": "flower",
            "past": "flowered"
        },
        {
            "present": "fold",
            "past": "folded"
        },
        {
            "present": "follow",
            "past": "followed"
        },
        {
            "present": "fool",
            "past": "fooled"
        },
        {
            "present": "force",
            "past": "forced"
        },
        {
            "present": "form",
            "past": "formed"
        },
        {
            "present": "found",
            "past": "founded"
        },
        {
            "present": "frame",
            "past": "framed"
        },
        {
            "present": "frighten",
            "past": "frightened"
        },
        {
            "present": "fry",
            "past": "fried"
        },
        {
            "present": "gather",
            "past": "gathered"
        },
        {
            "present": "gaze",
            "past": "gazed"
        },
        {
            "present": "glow",
            "past": "glowed"
        },
        {
            "present": "glue",
            "past": "glued"
        },
        {
            "present": "grab",
            "past": "grabbed"
        },
        {
            "present": "grate",
            "past": "grated"
        },
        {
            "present": "grease",
            "past": "greased"
        },
        {
            "present": "greet",
            "past": "greeted"
        },
        {
            "present": "grin",
            "past": "grinned"
        },
        {
            "present": "grip",
            "past": "gripped"
        },
        {
            "present": "groan",
            "past": "groaned"
        },
        {
            "present": "guarantee",
            "past": "guaranteed"
        },
        {
            "present": "guard",
            "past": "guarded"
        },
        {
            "present": "guess",
            "past": "guessed"
        },
        {
            "present": "guide",
            "past": "guided"
        },
        {
            "present": "hammer",
            "past": "hammered"
        },
        {
            "present": "hand",
            "past": "handed"
        },
        {
            "present": "handle",
            "past": "handled"
        },
        {
            "present": "hang",
            "past": "hung"
        },
        {
            "present": "happen",
            "past": "happened"
        },
        {
            "present": "harass",
            "past": "harassed"
        },
        {
            "present": "harm",
            "past": "harmed"
        },
        {
            "present": "hate",
            "past": "hated"
        },
        {
            "present": "haunt",
            "past": "haunted"
        },
        {
            "present": "head",
            "past": "headed"
        },
        {
            "present": "heal",
            "past": "healed"
        },
        {
            "present": "heap",
            "past": "heaped"
        },
        {
            "present": "heat",
            "past": "heated"
        },
        {
            "present": "help",
            "past": "helped"
        },
        {
            "present": "hook",
            "past": "hooked"
        },
        {
            "present": "hop",
            "past": "hopped"
        },
        {
            "present": "hope",
            "past": "hoped"
        },
        {
            "present": "hover",
            "past": "hovered"
        },
        {
            "present": "hug",
            "past": "hugged"
        },
        {
            "present": "hum",
            "past": "hummed"
        },
        {
            "present": "hunt",
            "past": "hunted"
        },
        {
            "present": "hurry",
            "past": "hurried"
        },
        {
            "present": "identify",
            "past": "identified"
        },
        {
            "present": "ignore",
            "past": "ignored"
        },
        {
            "present": "imagine",
            "past": "imagined"
        },
        {
            "present": "impress",
            "past": "impressed"
        },
        {
            "present": "improve",
            "past": "improved"
        },
        {
            "present": "include",
            "past": "included"
        },
        {
            "present": "increase",
            "past": "increased"
        },
        {
            "present": "influence",
            "past": "influenced"
        },
        {
            "present": "inform",
            "past": "informed"
        },
        {
            "present": "inject",
            "past": "injected"
        },
        {
            "present": "injure",
            "past": "injured"
        },
        {
            "present": "instruct",
            "past": "instructed"
        },
        {
            "present": "intend",
            "past": "intended"
        },
        {
            "present": "interest",
            "past": "interested"
        },
        {
            "present": "interfere",
            "past": "interfered"
        },
        {
            "present": "interrupt",
            "past": "interrupted"
        },
        {
            "present": "introduce",
            "past": "introduced"
        },
        {
            "present": "invent",
            "past": "invented"
        },
        {
            "present": "invite",
            "past": "invited"
        },
        {
            "present": "irritate",
            "past": "irritated"
        },
        {
            "present": "itch",
            "past": "itched"
        },
        {
            "present": "jail",
            "past": "jailed"
        },
        {
            "present": "jam",
            "past": "jammed"
        },
        {
            "present": "jog",
            "past": "jogged"
        },
        {
            "present": "join",
            "past": "joined"
        },
        {
            "present": "joke",
            "past": "joked"
        },
        {
            "present": "judge",
            "past": "judged"
        },
        {
            "present": "juggle",
            "past": "juggled"
        },
        {
            "present": "jump",
            "past": "jumped"
        },
        {
            "present": "kick",
            "past": "kicked"
        },
        {
            "present": "kill",
            "past": "killed"
        },
        {
            "present": "kiss",
            "past": "kissed"
        },
        {
            "present": "kneel",
            "past": "knelt"
        },
        {
            "present": "knit",
            "past": "knitted"
        },
        {
            "present": "knock",
            "past": "knocked"
        },
        {
            "present": "knot",
            "past": "knotted"
        },
        {
            "present": "label",
            "past": "labelled"
        },
        {
            "present": "land",
            "past": "landed"
        },
        {
            "present": "last",
            "past": "lasted"
        },
        {
            "present": "laugh",
            "past": "laughed"
        },
        {
            "present": "launch",
            "past": "launched"
        },
        {
            "present": "learn",
            "past": "learned"
        },
        {
            "present": "level",
            "past": "levelled"
        },
        {
            "present": "license",
            "past": "licensed"
        },
        {
            "present": "lick",
            "past": "licked"
        },
        {
            "present": "lie",
            "past": "lied"
        },
        {
            "present": "lighten",
            "past": "lightened"
        },
        {
            "present": "like",
            "past": "liked"
        },
        {
            "present": "list",
            "past": "listed"
        },
        {
            "present": "listen",
            "past": "listened"
        },
        {
            "present": "live",
            "past": "lived"
        },
        {
            "present": "load",
            "past": "loaded"
        },
        {
            "present": "lock",
            "past": "locked"
        },
        {
            "present": "long",
            "past": "longed"
        },
        {
            "present": "look",
            "past": "look"
        },
        {
            "present": "love",
            "past": "loved"
        },
        {
            "present": "man",
            "past": "manned"
        },
        {
            "present": "manage",
            "past": "managed"
        },
        {
            "present": "march",
            "past": "marched"
        },
        {
            "present": "mark",
            "past": "marked"
        },
        {
            "present": "marry",
            "past": "married"
        },
        {
            "present": "match",
            "past": "matched"
        },
        {
            "present": "mate",
            "past": "mated"
        },
        {
            "present": "matter",
            "past": "mattered"
        },
        {
            "present": "measure",
            "past": "measured"
        },
        {
            "present": "meddle",
            "past": "meddled"
        },
        {
            "present": "melt",
            "past": "melted"
        },
        {
            "present": "memorise",
            "past": "memorised"
        },
        {
            "present": "mend",
            "past": "mended"
        },
        {
            "present": "mess up",
            "past": "messed up"
        },
        {
            "present": "milk",
            "past": "milked"
        },
        {
            "present": "mine",
            "past": "mined"
        },
        {
            "present": "miss",
            "past": "missed"
        },
        {
            "present": "mix",
            "past": "mixed"
        },
        {
            "present": "moan",
            "past": "moaned"
        },
        {
            "present": "moor",
            "past": "moored"
        },
        {
            "present": "mourn",
            "past": "mourned"
        },
        {
            "present": "move",
            "past": "moved"
        },
        {
            "present": "muddle",
            "past": "muddled"
        },
        {
            "present": "mug",
            "past": "mugged"
        },
        {
            "present": "multiply",
            "past": "multiplied"
        },
        {
            "present": "murder",
            "past": "murdered"
        },
        {
            "present": "nail",
            "past": "nailed"
        },
        {
            "present": "name",
            "past": "named"
        },
        {
            "present": "need",
            "past": "needed"
        },
        {
            "present": "nest",
            "past": "nested"
        },
        {
            "present": "nod",
            "past": "nodded"
        },
        {
            "present": "note",
            "past": "noted"
        },
        {
            "present": "notice",
            "past": "noticed"
        },
        {
            "present": "number",
            "past": "numbered"
        },
        {
            "present": "obey",
            "past": "obeyed"
        },
        {
            "present": "object",
            "past": "objected"
        },
        {
            "present": "observe",
            "past": "observed"
        },
        {
            "present": "obtain",
            "past": "obtained"
        },
        {
            "present": "occur",
            "past": "occurred"
        },
        {
            "present": "offend",
            "past": "offended"
        },
        {
            "present": "offer",
            "past": "offered"
        },
        {
            "present": "open",
            "past": "opened"
        },
        {
            "present": "order",
            "past": "ordered"
        },
        {
            "present": "overflow",
            "past": "overflowed"
        },
        {
            "present": "owe",
            "past": "owed"
        },
        {
            "present": "own",
            "past": "owned"
        },
        {
            "present": "pack",
            "past": "packed"
        },
        {
            "present": "paddle",
            "past": "paddled"
        },
        {
            "present": "paint",
            "past": "painted"
        },
        {
            "present": "park",
            "past": "parked"
        },
        {
            "present": "part",
            "past": "parted"
        },
        {
            "present": "pass",
            "past": "passed"
        },
        {
            "present": "paste",
            "past": "pasted"
        },
        {
            "present": "pat",
            "past": "patted"
        },
        {
            "present": "pause",
            "past": "paused"
        },
        {
            "present": "peck",
            "past": "pecked"
        },
        {
            "present": "pedal",
            "past": "pedalled"
        },
        {
            "present": "peel",
            "past": "peeled"
        },
        {
            "present": "peep",
            "past": "peeped"
        },
        {
            "present": "perform",
            "past": "performed"
        },
        {
            "present": "permit",
            "past": "permitted"
        },
        {
            "present": "phone",
            "past": "phoned"
        },
        {
            "present": "pick",
            "past": "picked"
        },
        {
            "present": "pinch",
            "past": "pinched"
        },
        {
            "present": "pine",
            "past": "pined"
        },
        {
            "present": "place",
            "past": "placed"
        },
        {
            "present": "plan",
            "past": "planned"
        },
        {
            "present": "plant",
            "past": "planted"
        },
        {
            "present": "play",
            "past": "played"
        },
        {
            "present": "please",
            "past": "pleased"
        },
        {
            "present": "plug",
            "past": "plugged"
        },
        {
            "present": "point",
            "past": "pointed"
        },
        {
            "present": "poke",
            "past": "poked"
        },
        {
            "present": "polish",
            "past": "polished"
        },
        {
            "present": "pop",
            "past": "popped"
        },
        {
            "present": "possess",
            "past": "possessed"
        },
        {
            "present": "post",
            "past": "posted"
        },
        {
            "present": "pour",
            "past": "poured"
        },
        {
            "present": "practise",
            "past": "practised"
        },
        {
            "present": "pray",
            "past": "prayed"
        },
        {
            "present": "preach",
            "past": "preached"
        },
        {
            "present": "precede",
            "past": "preceded"
        },
        {
            "present": "prefer",
            "past": "preferred"
        },
        {
            "present": "prepare",
            "past": "prepared"
        },
        {
            "present": "present",
            "past": "presented"
        },
        {
            "present": "preserve",
            "past": "preserved"
        },
        {
            "present": "press",
            "past": "pressed"
        },
        {
            "present": "pretend",
            "past": "pretended"
        },
        {
            "present": "prevent",
            "past": "prevented"
        },
        {
            "present": "prick",
            "past": "pricked"
        },
        {
            "present": "print",
            "past": "printed"
        },
        {
            "present": "produce",
            "past": "produced"
        },
        {
            "present": "program",
            "past": "programmed"
        },
        {
            "present": "promise",
            "past": "promised"
        },
        {
            "present": "protect",
            "past": "protected"
        },
        {
            "present": "provide",
            "past": "provided"
        },
        {
            "present": "pull",
            "past": "pulled"
        },
        {
            "present": "pump",
            "past": "pumped"
        },
        {
            "present": "punch",
            "past": "punched"
        },
        {
            "present": "puncture",
            "past": "punctured"
        },
        {
            "present": "punish",
            "past": "punished"
        },
        {
            "present": "push",
            "past": "pushed"
        },
        {
            "present": "question",
            "past": "questioned"
        },
        {
            "present": "queue",
            "past": "questioned"
        },
        {
            "present": "race",
            "past": "raced"
        },
        {
            "present": "radiate",
            "past": "radiated"
        },
        {
            "present": "rain",
            "past": "rained"
        },
        {
            "present": "raise",
            "past": "raised"
        },
        {
            "present": "reach",
            "past": "reached"
        },
        {
            "present": "realise",
            "past": "realised"
        },
        {
            "present": "receive",
            "past": "received"
        },
        {
            "present": "recognise",
            "past": "recognised"
        },
        {
            "present": "record",
            "past": "recorded"
        },
        {
            "present": "reduce",
            "past": "reduced"
        },
        {
            "present": "reflect",
            "past": "reflected"
        },
        {
            "present": "refuse",
            "past": "refused"
        },
        {
            "present": "regret",
            "past": "regretted"
        },
        {
            "present": "reign",
            "past": "reigned"
        },
        {
            "present": "reject",
            "past": "rejected"
        },
        {
            "present": "rejoice",
            "past": "rejoiced"
        },
        {
            "present": "relax",
            "past": "relaxed"
        },
        {
            "present": "release",
            "past": "released"
        },
        {
            "present": "rely",
            "past": "relied"
        },
        {
            "present": "remain",
            "past": "remained"
        },
        {
            "present": "remember",
            "past": "remembered"
        },
        {
            "present": "remind",
            "past": "reminded"
        },
        {
            "present": "remove",
            "past": "removed"
        },
        {
            "present": "repair",
            "past": "repaired"
        },
        {
            "present": "repeat",
            "past": "repeated"
        },
        {
            "present": "replace",
            "past": "replaced"
        },
        {
            "present": "reply",
            "past": "replied"
        },
        {
            "present": "report",
            "past": "reported"
        },
        {
            "present": "reproduce",
            "past": "reproduced"
        },
        {
            "present": "request",
            "past": "requested"
        },
        {
            "present": "rescue",
            "past": "rescued"
        },
        {
            "present": "retire",
            "past": "retired"
        },
        {
            "present": "return",
            "past": "returned"
        },
        {
            "present": "rhyme",
            "past": "rhyme"
        },
        {
            "present": "rinse",
            "past": "rinsed"
        },
        {
            "present": "risk",
            "past": "risked"
        },
        {
            "present": "rob",
            "past": "robbed"
        },
        {
            "present": "rock",
            "past": "rocked"
        },
        {
            "present": "roll",
            "past": "rolled"
        },
        {
            "present": "rot",
            "past": "rotted"
        },
        {
            "present": "rub",
            "past": "rubbed"
        },
        {
            "present": "ruin",
            "past": "ruined"
        },
        {
            "present": "rule",
            "past": "ruled"
        },
        {
            "present": "rush",
            "past": "rushed"
        },
        {
            "present": "sack",
            "past": "sacked"
        },
        {
            "present": "sail",
            "past": "sailed"
        },
        {
            "present": "satisfy",
            "past": "satisfied"
        },
        {
            "present": "save",
            "past": "saved"
        },
        {
            "present": "saw",
            "past": "sawed"
        },
        {
            "present": "scare",
            "past": "scared"
        },
        {
            "present": "scatter",
            "past": "scattered"
        },
        {
            "present": "scold",
            "past": "scolded"
        },
        {
            "present": "scorch",
            "past": "scorched"
        },
        {
            "present": "scrape",
            "past": "scraped"
        },
        {
            "present": "scratch",
            "past": "scratched"
        },
        {
            "present": "scream",
            "past": "screamed"
        },
        {
            "present": "screw",
            "past": "screwed"
        },
        {
            "present": "scribble",
            "past": "scribbled"
        },
        {
            "present": "scrub",
            "past": "scrubbed"
        },
        {
            "present": "seal",
            "past": "sealed"
        },
        {
            "present": "search",
            "past": "searched"
        },
        {
            "present": "separate",
            "past": "separate"
        },
        {
            "present": "serve",
            "past": "served"
        },
        {
            "present": "settle",
            "past": "settled"
        },
        {
            "present": "shade",
            "past": "shaded"
        },
        {
            "present": "share",
            "past": "shared"
        },
        {
            "present": "shave",
            "past": "shaved"
        },
        {
            "present": "shelter",
            "past": "sheltered"
        },
        {
            "present": "shiver",
            "past": "shivered"
        },
        {
            "present": "shock",
            "past": "shocked"
        },
        {
            "present": "shop",
            "past": "shopped"
        },
        {
            "present": "shrug",
            "past": "shrugged"
        },
        {
            "present": "sigh",
            "past": "sighed"
        },
        {
            "present": "sign",
            "past": "signed"
        },
        {
            "present": "signal",
            "past": "signalled"
        },
        {
            "present": "sin",
            "past": "sinned"
        },
        {
            "present": "sip",
            "past": "sipped"
        },
        {
            "present": "ski",
            "past": "skied"
        },
        {
            "present": "skip",
            "past": "skipped"
        },
        {
            "present": "slap",
            "past": "slapped"
        },
        {
            "present": "slip",
            "past": "slipped"
        },
        {
            "present": "slow",
            "past": "slowed"
        },
        {
            "present": "smash",
            "past": "smashed"
        },
        {
            "present": "smell",
            "past": "smelled"
        },
        {
            "present": "smile",
            "past": "smiled"
        },
        {
            "present": "smoke",
            "past": "smoked"
        },
        {
            "present": "snatch",
            "past": "snatched"
        },
        {
            "present": "sneeze",
            "past": "sneezed"
        },
        {
            "present": "sniff",
            "past": "sniffed"
        },
        {
            "present": "snore",
            "past": "snored"
        },
        {
            "present": "snow",
            "past": "snowed"
        },
        {
            "present": "soak",
            "past": "soaked"
        },
        {
            "present": "soothe",
            "past": "soothed"
        },
        {
            "present": "sound",
            "past": "sounded"
        },
        {
            "present": "spare",
            "past": "spared"
        },
        {
            "present": "spark",
            "past": "sparked"
        },
        {
            "present": "sparkle",
            "past": "sparkled"
        },
        {
            "present": "spell",
            "past": "spelled"
        },
        {
            "present": "spill",
            "past": "spilled"
        },
        {
            "present": "spoil",
            "past": "spoiled"
        },
        {
            "present": "spot",
            "past": "spotted"
        },
        {
            "present": "spray",
            "past": "sprayed"
        },
        {
            "present": "sprout",
            "past": "sprouted"
        },
        {
            "present": "squash",
            "past": "squashed"
        },
        {
            "present": "squeak",
            "past": "squeaked"
        },
        {
            "present": "squeal",
            "past": "squealed"
        },
        {
            "present": "squeeze",
            "past": "squeezed"
        },
        {
            "present": "stain",
            "past": "stained"
        },
        {
            "present": "stamp",
            "past": "stamped"
        },
        {
            "present": "stare",
            "past": "stared"
        },
        {
            "present": "start",
            "past": "started"
        },
        {
            "present": "stay",
            "past": "stayed"
        },
        {
            "present": "steer",
            "past": "steered"
        },
        {
            "present": "step",
            "past": "stepped"
        },
        {
            "present": "stir",
            "past": "stirred"
        },
        {
            "present": "stitch",
            "past": "stitched"
        },
        {
            "present": "stop",
            "past": "stopped"
        },
        {
            "present": "store",
            "past": "stored"
        },
        {
            "present": "strap",
            "past": "strapped"
        },
        {
            "present": "strengthen",
            "past": "strengthened"
        },
        {
            "present": "stretch",
            "past": "stretched"
        },
        {
            "present": "strip",
            "past": "stripped"
        },
        {
            "present": "stroke",
            "past": "stroked"
        },
        {
            "present": "stuff",
            "past": "stuffed"
        },
        {
            "present": "subtract",
            "past": "subtracted"
        },
        {
            "present": "succeed",
            "past": "succeeded"
        },
        {
            "present": "suck",
            "past": "sucked"
        },
        {
            "present": "suffer",
            "past": "suffered"
        },
        {
            "present": "suggest",
            "past": "suggested"
        },
        {
            "present": "suit",
            "past": "suited"
        },
        {
            "present": "supply",
            "past": "supplied"
        },
        {
            "present": "support",
            "past": "supported"
        },
        {
            "present": "suppose",
            "past": "supposed"
        },
        {
            "present": "surprise",
            "past": "surprised"
        },
        {
            "present": "surround",
            "past": "surrounded"
        },
        {
            "present": "suspect",
            "past": "suspected"
        },
        {
            "present": "suspend",
            "past": "suspended"
        },
        {
            "present": "switch",
            "past": "switched"
        },
        {
            "present": "talk",
            "past": "talked"
        },
        {
            "present": "tame",
            "past": "tamed"
        },
        {
            "present": "tap",
            "past": "tapped"
        },
        {
            "present": "taste",
            "past": "tasted"
        },
        {
            "present": "tease",
            "past": "teased"
        },
        {
            "present": "telephone",
            "past": "telephoned"
        },
        {
            "present": "tempt",
            "past": "tempted"
        },
        {
            "present": "terrify",
            "past": "terrified"
        },
        {
            "present": "test",
            "past": "tested"
        },
        {
            "present": "thank",
            "past": "thanked"
        },
        {
            "present": "thaw",
            "past": "thawed"
        },
        {
            "present": "tick",
            "past": "ticked"
        },
        {
            "present": "tickle",
            "past": "tickled"
        },
        {
            "present": "tie",
            "past": "tied"
        },
        {
            "present": "time",
            "past": "timed"
        },
        {
            "present": "tip",
            "past": "tipped"
        },
        {
            "present": "tire",
            "past": "tired"
        },
        {
            "present": "touch",
            "past": "touched"
        },
        {
            "present": "tour",
            "past": "toured"
        },
        {
            "present": "tow",
            "past": "towed"
        },
        {
            "present": "trace",
            "past": "traced"
        },
        {
            "present": "trade",
            "past": "traded"
        },
        {
            "present": "train",
            "past": "trained"
        },
        {
            "present": "transport",
            "past": "transported"
        },
        {
            "present": "trap",
            "past": "trapped"
        },
        {
            "present": "travel",
            "past": "travelled"
        },
        {
            "present": "treat",
            "past": "treated"
        },
        {
            "present": "tremble",
            "past": "trembled"
        },
        {
            "present": "trick",
            "past": "tricked"
        },
        {
            "present": "trip",
            "past": "tripped"
        },
        {
            "present": "trot",
            "past": "trotted"
        },
        {
            "present": "trouble",
            "past": "troubled"
        },
        {
            "present": "trust",
            "past": "trusted"
        },
        {
            "present": "try",
            "past": "tried"
        },
        {
            "present": "tug",
            "past": "tugged"
        },
        {
            "present": "tumble",
            "past": "tumbled"
        },
        {
            "present": "turn",
            "past": "turned"
        },
        {
            "present": "twist",
            "past": "twisted"
        },
        {
            "present": "type",
            "past": "typed"
        },
        {
            "present": "undress",
            "past": "undressed"
        },
        {
            "present": "unfasten",
            "past": "unfastened"
        },
        {
            "present": "unite",
            "past": "united"
        },
        {
            "present": "unlock",
            "past": "unlocked"
        },
        {
            "present": "unpack",
            "past": "unpacked"
        },
        {
            "present": "untidy",
            "past": "untidied"
        },
        {
            "present": "use",
            "past": "used"
        },
        {
            "present": "vanish",
            "past": "vanished"
        },
        {
            "present": "visit",
            "past": "visited"
        },
        {
            "present": "wail",
            "past": "wailed"
        },
        {
            "present": "wait",
            "past": "waited"
        },
        {
            "present": "walk",
            "past": "walked"
        },
        {
            "present": "wander",
            "past": "wandered"
        },
        {
            "present": "want",
            "past": "wanted"
        },
        {
            "present": "warm",
            "past": "warmed"
        },
        {
            "present": "warn",
            "past": "warned"
        },
        {
            "present": "wash",
            "past": "washed"
        },
        {
            "present": "waste",
            "past": "wasted"
        },
        {
            "present": "watch",
            "past": "watched"
        },
        {
            "present": "water",
            "past": "watered"
        },
        {
            "present": "wave",
            "past": "waved"
        },
        {
            "present": "weigh",
            "past": "weighed"
        },
        {
            "present": "welcome",
            "past": "welcomed"
        },
        {
            "present": "whine",
            "past": "whined"
        },
        {
            "present": "whip",
            "past": "whipped"
        },
        {
            "present": "whirl",
            "past": "whirled"
        },
        {
            "present": "whisper",
            "past": "whispered"
        },
        {
            "present": "whistle",
            "past": "whistled"
        },
        {
            "present": "wink",
            "past": "winked"
        },
        {
            "present": "wipe",
            "past": "wiped"
        },
        {
            "present": "wish",
            "past": "wished"
        },
        {
            "present": "wobble",
            "past": "wobbled"
        },
        {
            "present": "wonder",
            "past": "wondered"
        },
        {
            "present": "work",
            "past": "worked"
        },
        {
            "present": "worry",
            "past": "worried"
        },
        {
            "present": "wrap",
            "past": "wrapped"
        },
        {
            "present": "wreck",
            "past": "wrecked"
        },
        {
            "present": "wrestle",
            "past": "wrestled"
        },
        {
            "present": "wriggle",
            "past": "wriggled"
        },
        {
            "present": "x-ray",
            "past": "x-rayed"
        },
        {
            "present": "yawn",
            "past": "yawned"
        },
        {
            "present": "yell",
            "past": "yelled"
        },
        {
            "present": "zip",
            "past": "zipped"
        },
        {
            "present": "zoom",
            "past": "zoomed"
        }
    ]
}
;
},{}],"index.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef
var _require = require("./node_modules/corpora/data/humans/occupations.json"),
    occupations = _require.occupations;

var _require2 = require("./node_modules/corpora/data/words/verbs.json"),
    verbs = _require2.verbs;

var time_units = ["nanoseconds", "microseconds", "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", "years", "decades", "centuries", "millenia"];
var job = d3.shuffle(occupations)[0];
var verb = d3.shuffle(verbs)[0]["past"];
var y_title_text = "".concat(job, "s ").concat(verb, " ");
var x_title_text = d3.shuffle(time_units)[0]; // console.log(y_title_text);
// console.log(corpora("occupations"));

var ANIMATE_LINES = false; // ANIMATE_LINES = true;

var SETUP_ZOOM_AND_BG = false;
var n_lines = parseInt(undefined) || 200;
var n_entries = parseInt(undefined) || 150; // let mult = parseInt(process.env.MULT) || 0; // 1 gives us touching grid, 2 gives us spacing  stairs, 0 gives us a tree

var mult = parseInt(undefined) || 0.01; // 1 gives us touching grid, 2 gives us spacing  stairs, 0 gives us a tree
// let n_lines = 3;
// console.log(process.env.DB_HOST);
// reset for hmr in dev

d3.select("svg").selectAll("*").remove(); // console.log(process.env.MULT)
// generate my data

function create_data() {
  var start_at = 0; // let start_at = -(n_lines / 2);
  // console.log(start_at);
  // let start_at = -5;

  var data = [];

  for (var i = start_at; i < n_lines + start_at; i++) {
    // they all now just start at 0, much simple
    // possibly add back in `mult` in the rendering or scale
    var _line = [0]; //better
    // let line = [i * mult];
    // let line = d3.range(-n_lines / 2 + i * mult, n_lines / 2 + i * mult);
    // for simpler debugging
    // let line = d3.range(-5 + i, 5 + i);

    for (var j = 0; j < n_entries - 1; j++) {
      // flip a coin
      var offset = d3.shuffle([-1, 1])[0]; // get the the previous value

      var last = _line[_line.length - 1]; // add the previous value to our new coin flip and push it to the line's array

      _line.push(last + offset);
    }

    data.push(_line);
  }

  return data;
}

var data = create_data();
var means = []; // console.log(data);

for (var j = 0; j < n_entries; j++) {
  var reducer = function reducer(accumulator, currentValue) {
    return accumulator + currentValue[j];
  };

  var totals = data.reduce(reducer, 0);
  means.push(totals / n_lines);
}

var all_means = [];

for (var i = 0; i < n_lines; i++) {
  all_means.push(means);
} // console.log(all_means);
// console.log(means.length);
// const csv_file_path = require("./giniLine.csv");
// Define margins
// var margin = { top: 20, right: 0, bottom: 30, left: 50 };


var margin = {
  top: 20,
  right: 0,
  bottom: 85,
  left: 85
};
var width = parseInt(d3.select("svg").style("width")) - margin.left - margin.right;
var height = parseInt(d3.select("svg").style("height")) - margin.top - margin.bottom; // Define date parser
// var parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");
// Define scales
// var xScale = d3.scaleTime().range([0, width]);

var xScale = d3.scaleLinear().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(d3.schemeCategory10).domain([0, data.length]); // Define axes

var xAxis = d3.axisBottom().scale(xScale);
var yAxis = d3.axisLeft().scale(yScale); // Define lines

var line = d3.line().curve(d3.curveStep) // .curve(d3.curveStepAfter)
// .curve(d3.curveMonotoneX)
.x(function (d, i) {
  return xScale(i); // return xScale(d["date"]);
}).y(function (d, i) {
  return yScale(d); // return yScale(d["concentration"]);
}); // Define svg canvas

var svg = d3.select("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg = svg.append("g").attr("id", "graph");

if (SETUP_ZOOM_AND_BG) {
  var zoomed = function zoomed() {
    console.log("zoomm?");
    d3.select("g#graph ").attr("transform", d3.event.transform);
  };

  svg.append("rect").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
  d3.select("g#graph ").call(d3.zoom().scaleExtent([1 / 2, 4]).on("zoom", zoomed));
} // Set the domain of the axes
// hacky, assumes they're all the same length, we use the first one XXX


xScale.domain([0, data[0].length]); // this fits them all

yScale.domain(d3.extent(data.flat(), function (d, i) {
  return d;
})); //  for close up debug
// xScale.domain([0, data[0].length / 2]);
// yScale.domain([0, 25]);
// d3.select("body").on("click", animate);

d3.select("body").on("click", animate_to_mean);
d3.select("body").on("touchstart", animate_to_mean); // Place the axes on the chart

svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).append("text").attr("class", "label").attr("y", 35).attr("x", width / 2).attr("dy", ".71em").attr("dx", ".71em").style("text-anchor", "middle").attr("font-size", "20px").style("text-transform", "capitalize") // .text("Time");
.text(x_title_text);
svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("class", "label") // x and y are reversed because we rotate it
.attr("y", -55).attr("x", -height / 2).attr("font-size", "20px").attr("dy", ".71em").attr("dx", ".71em").style("text-transform", "capitalize").style("text-anchor", "middle").text(y_title_text).attr("transform", "rotate(-90)"); // console.log(data);

var lines = svg.selectAll(".trend_g").data(data).enter().append("g").attr("class", "trend_g");
lines.append("path").attr("class", "line").attr("d", function (d) {
  // console.log(d);
  return line(d);
}).style("stroke", function (d, i) {
  return color(i); // return "black";
}); // console.log(JSON.stringify(d3.values(concentrations), null, 2)) // to view the structure
// console.log(d3.values(concentrations)); // to view the structure
// console.log(concentrations);
// console.log(concentrations.map(function()))
// });
// Define responsive behavior

function resize() {
  var width = parseInt(d3.select("svg").style("width")) - margin.left - margin.right,
      height = parseInt(d3.select("svg").style("height")) - margin.top - margin.bottom; // Update the range of the scale with new width/height

  xScale.range([0, width]);
  yScale.range([height, 0]); // Update the axis and text with the new scale

  svg.select(".x.axis").attr("transform", "translate(0," + height + ")").call(xAxis);
  svg.select(".y.axis").call(yAxis); // Force D3 to recalculate and update the line

  svg.selectAll(".line").attr("d", function (d) {
    return line(d);
  }); // and do our animation

  if (ANIMATE_LINES) {
    animate();
  } // .on("start", repeat);
  // Update the tick marks


  xAxis.ticks(Math.max(width / 75, 2));
  yAxis.ticks(Math.max(height / 50, 2));
} // hacky flag


var has_run = false;
var is_showing_mean = false;

function animate_to_mean() {
  // console.log("animate_to_mean");
  var data_to_use = !is_showing_mean ? all_means : data;
  is_showing_mean = !is_showing_mean;
  var lines = svg.selectAll(".trend_g").data(data_to_use).transition().duration(2000) // .ease(d3.easeExp);
  // .ease(d3.easeElastic);
  .ease(is_showing_mean ? d3.easeExp : d3.easeBounce); // .enter()
  // .append("g")
  // .attr("class", "trend_g");

  lines // .append("path")
  .select("path").attr("d", function (d) {
    // console.log(d);
    return line(d);
  }); // .transition();
}

function animate() {
  if (has_run) {
    return;
  }

  console.log("animating!");
  has_run = true;
  svg.selectAll(".line").attr("stroke-dasharray", "0 100000").transition().delay(function (d, i) {
    return i * 1000;
  }).duration(20000).on("start", function repeat() {
    d3.active(this).styleTween("stroke-dasharray", tweenDash).ease(d3.easeLinear).transition();
  });
}

var Debouncer =
/*#__PURE__*/
function () {
  function Debouncer() {
    _classCallCheck(this, Debouncer);

    this.lookup = {};
  }

  _createClass(Debouncer, [{
    key: "cancel",
    value: function cancel(identifier) {
      var timer_id = this.lookup[identifier];

      if (timer_id) {
        clearTimeout(timer_id);
        delete this.lookup[timer_id];
      }
    }
  }, {
    key: "set",
    value: function set(identifier, ms, cb) {
      this.cancel(identifier);
      var new_timer_id = setTimeout(cb, ms);
      this.lookup[identifier] = new_timer_id;
    }
  }]);

  return Debouncer;
}();

var debounce = new Debouncer(); // Call the resize function whenever a resize event occurs

d3.select(window).on("resize", function () {
  return debounce.set("resized", 450, resize);
}); // need debounce!  XXX
// Call the resize function

resize();

function tweenDash() {
  var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l);
  return function (t) {
    return i(t);
  };
}

function tweenBack() {
  var l = this.getTotalLength(),
      i = d3.interpolateString(l + ",0", "0," + l);
  return function (t) {
    return i(t);
  };
}
},{"./node_modules/corpora/data/humans/occupations.json":"node_modules/corpora/data/humans/occupations.json","./node_modules/corpora/data/words/verbs.json":"node_modules/corpora/data/words/verbs.json"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56982" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/randomwalks.e31bb0bc.map