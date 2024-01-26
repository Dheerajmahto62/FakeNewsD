document.getElementById('search-btn').addEventListener('click', function() {
            const searchBar = document.getElementById('search-bar');
            const searchQuery = searchBar.value.trim();
            if (searchQuery) {
                if (searchQuery.startsWith('http://') || searchQuery.startsWith('https://')) {
                    window.location.href = searchQuery;
                } else {
                    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
                }
            }
        });