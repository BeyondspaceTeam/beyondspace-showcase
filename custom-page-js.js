$(document).ready(function() {
	var reviewsUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo1pkd7bu8liIf5wU7yrjxeyUTiPmj8sV_dZsgzmZYilAd9RMdDpbhNPUI1b1Gh_WDEddABaIclZlE/pub?gid=0&single=true&output=tsv";
	var reviewTemplate = `
		<div class="Classic__ClassicContainer">
		    <a href="{{link}}" target="_blank" rel="noopener noreferrer nofollow" class="Classic__Heading">
		        <div class="AuthorPicture__Container Classic__StyledAuthorPicture" style="background-image: url({{useravatar}}); opacity: 1; transition: opacity 0.3s ease 0s;"></div>
		        <div class="Classic__HeadingInfo">
		            <div class="Classic__AuthorName">{{username}}</div>
		            <div class="Rating__Container Classic__StyledRating">
		                <div class="FilledSvg__Container">
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Unfilled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Filled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                </div>
		                <div class="FilledSvg__Container">
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Unfilled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Filled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                </div>
		                <div class="FilledSvg__Container">
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Unfilled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Filled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                </div>
		                <div class="FilledSvg__Container">
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Unfilled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Filled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                </div>
		                <div class="FilledSvg__Container">
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Unfilled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                    <div class="FilledSvg__ContainerAbsolute FilledSvg__Filled">
		                        <svg viewBox="0 0 14 14">
		                            <path fill="none" d="M6.826 10.743l-3.28 1.724a.5.5 0 0 1-.725-.528l.627-3.65a.5.5 0 0 0-.144-.443L.65 5.26a.5.5 0 0 1 .277-.853l3.666-.533a.5.5 0 0 0 .377-.273L6.61.279a.5.5 0 0 1 .896 0L9.147 3.6a.5.5 0 0 0 .376.273l3.666.533a.5.5 0 0 1 .277.853l-2.653 2.586a.5.5 0 0 0-.144.442l.627 3.651a.5.5 0 0 1-.726.528l-3.279-1.724a.5.5 0 0 0-.465 0z"></path>
		                        </svg>
		                    </div>
		                </div>
		            </div>
		            <div class="PublicationDate__Container Classic__StyledPublicationDate">
		                <div datetime="{{time}}" title="{{time}}" class="DateTime__Time Classic__StyledPublicationDate">{{calculated_time}}</div>
		            </div>
		        </div>
		    </a>
		    <div class="Classic__Content">
		        <div class="Text__Container Classic__StyledText">
		            <div class="SimpleShortener__Outer">
		                <div class="SimpleShortener__Inner">
		                    <div>{{details}}</div>
		                </div>
		            </div>
		        </div>
		        <a class="Supplier__Container-a7c0ny-0 dZckwk Classic__StyledSupplier" href="{{link}}" target="_blank" rel="noopener noreferrer nofollow">
		            <div>
		                <div class="Supplier__Label">Posted on</div>
		                <div class="Supplier__Name">{{source}}</div>
		            </div>
		        </a>
		    </div>
		</div>
	`;
	var reviews = [];
	var reviewsContainer = ".testimonials";

	$.get(reviewsUrl, function(res) {
		res = res.split("\r\n");
		res = res.map(function(item) {
			return item.split("\t");
		});
		var header = res[0];
		var data = res.slice(1);
		
		data.filter(function(dataItem) {
			var reviewItem = {};
			for (var i = 0;i < header.length; i++) {
				reviewItem[header[i].toLowerCase().trim()] = dataItem[i];
			}
			if (reviewItem.products == "Form Datepicker") {
				reviews.push(reviewItem);
			}			
		});
		
		reviews.map(function(reviewItem) {
			var tpl = reviewTemplate;
			for (var key in reviewItem) {
				tpl = tpl.replaceAll("{{"+key+"}}", reviewItem[key]);			
			}

			var calculated_time = timeDifference(new Date(), new Date(reviewItem.time));
			tpl = tpl.replaceAll("{{calculated_time}}", calculated_time);

			$(reviewsContainer).append(tpl);
		});

		var macyInstance = Macy({
		  	container: ".testimonials",
		    columns: 4,
		    margin: {
		      x: 10,
		      y: 16  
		    },
		    breakAt: {
		        940: 3,
		        520: 2,
		        400: 1
		    }
		});
	});

	function timeDifference(current, previous) {

	    var msPerMinute = 60 * 1000;
	    var msPerHour = msPerMinute * 60;
	    var msPerDay = msPerHour * 24;
	    var msPerMonth = msPerDay * 30;
	    var msPerYear = msPerDay * 365;

	    var elapsed = current - previous;

	    if (elapsed < msPerMinute) {
	         return Math.round(elapsed/1000) + ' seconds ago';   
	    }

	    else if (elapsed < msPerHour) {
	         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
	    }

	    else if (elapsed < msPerDay ) {
	         return Math.round(elapsed/msPerHour ) + ' hours ago';   
	    }

	    else if (elapsed < msPerMonth) {
	        return Math.round(elapsed/msPerDay) + ' days ago';   
	    }

	    else if (elapsed < msPerYear) {
	        return Math.round(elapsed/msPerMonth) + ' months ago';   
	    }

	    else {
	        return Math.round(elapsed/msPerYear ) + ' years ago';   
	    }
	}
});